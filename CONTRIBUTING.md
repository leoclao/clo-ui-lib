# 🤝 Contributing to clo-ui-lib

> Language: [🇺🇸 English](./docs/vi/CONTRIBUTING.md) | [🇻🇳 Tiếng Việt](./docs/vi/CONTRIBUTING.md)

Thank you for considering contributing to **clo-ui-lib** – a modular, open-source UI component library!

---

## 🧰 Prerequisites

- Node.js ≥ 18
- pnpm ≥ 8
- Git, ESLint, TypeScript installed

---

## 🚀 Getting Started

1. Fork repo: https://github.com/leoclao/clo-ui-lib
2. Clone code to local:

```bash
git clone git@github.com:your-username/clo-ui-lib.git
cd clo-ui-lib
```

3. Install:

```bash
pnpm install
```

4. Run dev mode:

```bash
pnpm dev
```
---

## ✨ Add a New Component

1. Create a folder `packages/` (ví dụ: `avatar`)
2. Include:

- `src/index.ts`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`

3. Use shared types (optional):
```bash
pnpm add @clo-ui-lib/types --workspace-root
```

---

## 📦 Build Component

```bash
pnpm --filter @clo-ui-lib/button build
```

To build all:

```bash
pnpm build
```

---

## 🔧 Format and Linter

Run:

```bash
pnpm lint
```

---

## 🧪 Test
Using library Vitest:

```bash
pnpm test
```

---

## 📝 Submit a Pull Request

1. Create new branch:

```bash
git checkout -b feat/your-feature
```

2. Add a changeset:

```bash
pnpm changeset
```

3. Commit and push:

```bash
git commit -am "feat: add your-feature"
git push origin feat/your-feature
```

4. Open a Pull Request on GitHub..

---

## ✅ Commit guidelines (suggested)

Using Conventional Commits:

```bash
feat: add new component
fix: fix modal click
docs: update README
chore: bump version
```

---

## ❤️ Thank You!
Your contribution makes clo-ui-lib better for everyone 🎉

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the local [LICENSE](./LICENSE) file for full details.

© [leoclao](https://github.com/leoclao)