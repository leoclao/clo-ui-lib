
# 🧩 clo-ui-lib

>Language: [🇺🇸 English](./docs/en/README.md) | [🇻🇳 Tiếng Việt](./docs/vi/README.md)

---

**Clo UI Library** is a reusable UI component system built with **TypeScript**, **Web Components**, and **Vite**, following a **Monorepo** architecture.

- 📦 Modular design: `@clo-ui-lib/button`, `@clo-ui-lib/modal`, etc.
- 💡 Supports tree-shaking, type declarations, ESM & CJS output.
- 🛠️ DCompatible with React, Vue, Angular, Svelte, etc.
- 🚀 Automated versioning and publishing with Changesets.
- 📚 Individual changelogs per package.

---

## 📁 Monorepo Structure

```bash
clo-ui-lib/
├── packages/ # Component packages
├── shared/ # Shared types, hooks, utils
├── apps/ # Demos, playground, storybook
├── .changeset/ # Versioning & changelogs
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

## 📦 Installation

Install a specific component:
```bash
pnpm add @clo-ui-lib/button
```

HOr install the whole library (if bundled):
```bash
pnpm add clo-ui-lib
```

## 🧪 Development

Run dev all workspace:
```bash
pnpm install
pnpm dev
```

Build all packages:
```bash
pnpm build
```

## 📤 Versioning & Publishing
Dự án sử dụng Changesets để quản lý version và publish.

Create a new changeset:

```bash
pnpm changeset
```

Bump versions & generate changelog:

```bash
pnpm version-packages
```

Publish to npm:

```bash
pnpm release
```

## 🧱 Create a New Component
1. Create folder in `packages/<your-component>`
2. Add `package.json`, `tsconfig.json`, `vite.config.ts`, và `src/`
3. Link shared types if needed:

```bash
pnpm add @clo-ui-lib/types --workspace-root
```

## 🔧 Useful Scripts
| Script | Description |
| ----------- | ----------- |
| `pnpm dev` | Start dev mode for all packages |
| `pnpm build` | Build the entire library |
| `pnpm changeset` | Start changeset workflow |
| `pnpm version-packages`	| Version bump & changelogs |
| `pnpm release` | Publish to npm |

## 💡 Contributing

All contributions are welcome!

To contribute, please follow the steps in [CONTRIBUTING](CONTRIBUTING.md).

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
See the local [LICENSE](./LICENSE) file for full details.

© [leoclao](https://github.com/leoclao)
