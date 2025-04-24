// scripts/gen-branch-log.js
import { simpleGit } from "simple-git";
import fs from "fs";
import path from "path";

const git = simpleGit();

async function generateBranchLog() {
  const outputDir = path.resolve("docs");
  const outputFile = path.join(outputDir, "branch-log.md");
  const branches = await git.branchLocal();
  const rows = [];

  for (const name of branches.all) {
    const log = await git.log({ from: "origin/main", to: name, n: 1 });
    const latest = log.latest;
    if (!latest) continue;

    const prMatch = latest.message.match(/\(#(\d+)\)/);
    const prLink = prMatch
      ? `[#${prMatch[1]}](https://github.com/your-org/clo-ui-lib/pull/${prMatch[1]})`
      : "*Chưa có PR*";

    rows.push(
      `| \`${name}\` | ${
        latest.message.split("\n")[0]
      } | 🚧 Đang phát triển | ${prLink} | ${
        new Date(latest.date).toISOString().split("T")[0]
      } |`
    );
  }

  const content = `
# 📘 Branch Log – clo-ui-lib

> Tự động sinh từ Git log.

## 🗂 Danh sách nhánh

| Nhánh | Mô tả | Trạng thái | Liên kết PR | Ngày tạo |
|-------|------|------------|-------------|----------|
${rows.join("\n")}

> Ghi chú: Chỉ lấy commit gần nhất của mỗi nhánh local.
`;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.resolve("docs/branch-log.md"), content);
  console.log("✅ Đã cập nhật docs/branch-log.md");
}

generateBranchLog();
