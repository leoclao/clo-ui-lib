#!/bin/bash

# Đường dẫn file log
OUTPUT_FILE="docs/branch-log.md"
REPO_URL="https://github.com/your-org/clo-ui-lib"

# Tạo thư mục docs nếu chưa có
if [ ! -d "docs" ]; then
  mkdir -p docs
  echo "📁 Tạo thư mục docs/"
fi

# Tạo tiêu đề file
echo "# 📘 Branch Log – clo-ui-lib" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "> Tự động sinh từ Git log (Bash version)." >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "## 🗂 Danh sách nhánh" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "| Nhánh | Mô tả | Trạng thái | Liên kết PR | Ngày tạo |" >> "$OUTPUT_FILE"
echo "|-------|------|------------|-------------|----------|" >> "$OUTPUT_FILE"

# Lấy danh sách nhánh local (bỏ main)
for branch in $(git branch --format="%(refname:short)" | grep -v "main"); do
  # Lấy commit mới nhất của nhánh
  commit_info=$(git log -1 --pretty=format:"%s|%ad" --date=short "$branch")
  commit_msg=$(echo "$commit_info" | cut -d"|" -f1)
  commit_date=$(echo "$commit_info" | cut -d"|" -f2)

  # Tìm link PR (nếu có #xxx trong commit)
  if [[ "$commit_msg" =~ \#([0-9]+) ]]; then
    pr_number="${BASH_REMATCH[1]}"
    pr_link="[#${pr_number}](${REPO_URL}/pull/${pr_number})"
  else
    pr_link="*Chưa có PR*"
  fi

  # Ghi vào bảng
  echo "| \`$branch\` | $commit_msg | 🚧 Đang phát triển | $pr_link | $commit_date |" >> "$OUTPUT_FILE"
done

echo "" >> "$OUTPUT_FILE"
echo "> Ghi chú: Chỉ lấy commit mới nhất trên mỗi nhánh local." >> "$OUTPUT_FILE"

echo "✅ Đã tạo/ghi đè $OUTPUT_FILE"
