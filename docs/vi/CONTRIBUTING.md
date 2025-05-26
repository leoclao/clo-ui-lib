# 🤝 Đóng góp vào clo-ui-lib

>Ngôn ngữ: [🇺🇸 English](./docs/en/CONTRIBUTING.md) | [🇻🇳 Tiếng Việt](./docs/vi/CONTRIBUTING.md)

Cảm ơn bạn đã quan tâm đến việc đóng góp cho **clo-ui-lib** – thư viện UI component mở, dễ mở rộng và chia sẻ!

---

## 🧰 Yêu cầu trước khi bắt đầu

- Node.js ≥ 18
- pnpm ≥ 8
- `Git`, `Eslint`, và `Typescript`

## 🧱 Cài đặt và chạy local

```bash
git clone git@github.com:your-username/clo-ui-lib.git
cd clo-ui-lib
pnpm install
pnpm dev
```

## ✨ Tạo component mới

1. Tạo thư mục mới trong `packages/<tên-component>`
2. Tạo các file cần thiết:

- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `src/index.ts`

4. Dùng type chung (nếu có):
```bash
pnpm add @clo-ui-lib/types --workspace-root
```

## 📦 Build component

```bash
pnpm --filter @clo-ui-lib/button build
```

Build toàn bộ:

```bash
pnpm build
```

## 🧪 Test & lint

Chạy lint trước khi commit:

```bash
pnpm lint
pnpm test
```

## ✍️ Tạo Pull Request

1. Tạo nhánh mới:

```bash
git checkout -b feat/your-feature
```

2. Tạo changeset mô tả:

```bash
pnpm changeset
```

3. Commit và đẩy code::

```bash
git commit -am "feat: add your-feature"
git push origin feat/your-feature
```

4. Mở Pull Request(PR) trên GitHub.

## 🧹 ✅ Quy tắc commit (gợi ý):

```bash
feat: thêm component button
fix: sửa lỗi click trong modal
docs: cập nhật README
chore: bump version
```

## ❤️ Cảm ơn vì đã đóng góp!
Đóng góp của bạn giúp clo-ui-lib ngày càng tốt hơn 🎉

## 📄 License

Dự án này được cấp phép theo [Giấy phép MIT](https://opensource.org/licenses/MIT).
Xem [LICENSE](./LICENSE) cục bộ để biết thông tin chi tiết đầy đủ.

© [leoclao](https://github.com/leoclao)