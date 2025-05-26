# 🧩 clo-ui-lib

>Ngôn ngữ: [🇺🇸 English](./docs/en/README.md) | [🇻🇳 Tiếng Việt](./docs/vi/README.md)

**Clo UI Library** là một thư viện các thành phần UI tái sử dụng được xây dựng với **TypeScript**, **Web Components**, **Vite**, hỗ trợ đa framework và phát triển theo kiến trúc **Monorepo**.

- 📦 Thiết kế modular theo từng component (`button`, `modal`, ...)
- 💡 Hỗ trợ Tree-shaking, TypeScript, và ESM/CJS output
- 🛠️ Dễ dàng tích hợp vào React, Vue, Svelte, Angular, v.v.
- 🚀 Tự động version & publish với Changesets
- 📚 Tự động tạo changelog riêng từng package

---

## 📁 Cấu trúc Monorepo

```bash
clo-ui-lib/
├── packages/ # Các UI components (button, modal, ...)
├── shared/ # Mã dùng chung (types, utils, hooks)
├── apps/ # Playground, Storybook hoặc demo apps
├── .changeset/ # Cấu hình Changesets
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

## 📦 Cài đặt

Bạn có thể cài từng component riêng lẻ:
```bash
pnpm add @clo-ui-lib/button
```

Hoặc dùng trọn bộ (nếu build bundle tổng):
```bash
pnpm add clo-ui-lib
```

## 🧪 Phát triển local

Cài dependencies:
```bash
pnpm install
```

Chạy dev cho toàn bộ workspace:
```bash
pnpm dev
```

Build toàn bộ packages:
```bash
pnpm build
```

## 📤 Publish & Version
Dự án sử dụng Changesets để quản lý version và publish.

Tạo changeset mới:

```bash
pnpm changeset
```
> Chọn package → chọn kiểu release (patch / minor / major) → nhập mô tả.

Tự động bump version & tạo changelog:

```bash
pnpm version-packages
```

Publish lên npm:

```bash
pnpm release
```

> 🔒 Đảm bảo bạn đã cấu hình `NPM_TOKEN` trong GitHub Secrets nếu dùng CI.

## 🧱 Xây dựng component mới
1. Tạo thư mục `packages/my-component`
2. Thêm `package.json`, `tsconfig.json`, `vite.config.ts`, và `src/`
3. Kết nối với @clo-ui-lib/types nếu dùng types chung:

```bash
pnpm add @clo-ui-lib/types --workspace-root
```

## 🔧 Scripts có sẵn
| Lệnh | Mô tả |
| ----------- | ----------- |
| `pnpm dev` | Chạy dev cho tất cả packages |
| `pnpm build` | Build toàn bộ thư viện |
| `pnpm changeset` | Tạo version thay đổi |
| `pnpm version-packages`	| Bump version, generate changelog |
| `pnpm release` | Publish packages lên npm |
| `pnpm lint` | Chạy eslint toàn repo |
| `pnpm test` | Chạy toàn bộ test (nếu có) |

## 💡 Đóng góp

Mọi đóng góp đều được chào đón!

Để đóng góp, vui lòng làm theo các bước trong [CONTRIBUTING](./docs/vi/CONTRIBUTING.md).

## 📄 License

Dự án này được cấp phép theo [Giấy phép MIT](https://opensource.org/licenses/MIT).
Xem [LICENSE](./LICENSE) cục bộ để biết thông tin chi tiết đầy đủ.

© [leoclao](https://github.com/leoclao)