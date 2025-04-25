#!/bin/bash

set -e

echo "🔍 Checking prerequisites..."

# Ensure pnpm is available
if ! command -v pnpm &> /dev/null; then
  echo "❌ pnpm not found. Please install pnpm first."
  exit 1
fi

# Ensure node_modules exists
if [ ! -d "node_modules" ]; then
  echo "❌ node_modules not found. Run 'pnpm install' before running this script."
  exit 1
fi

# Clean up old hooks (Husky or Git)
echo "🧹 Cleaning up old hook systems..."

if [ -d ".husky" ]; then
  echo "  🔥 Removing .husky/ directory..."
  rm -rf .husky
fi

if [ -d ".git/hooks" ]; then
  echo "  🔥 Removing old .git/hooks directory..."
  rm -rf .git/hooks
fi

# Install lefthook if not present globally or locally
if ! command -v lefthook &> /dev/null; then
  echo "📦 Installing lefthook (as devDependency in workspace root)..."
  pnpm add -D -w lefthook
else
  echo "✅ Lefthook already installed."
fi

# Install git hooks
echo "🔧 Installing Lefthook hooks..."
npx lefthook install

# Generate root-level config if missing
CONFIG_FILE=".lefthook.yml"
if [ ! -f "$CONFIG_FILE" ]; then
  echo "📄 Creating default $CONFIG_FILE..."
  cat <<EOF > $CONFIG_FILE
skip:
  envs: [CI]

pre-commit:
  parallel: true
  commands:
    lint:
      run: pnpm -r lint
    format:
      run: pnpm -r format
    typecheck:
      run: pnpm -r typecheck
    stylelint:
      run: pnpm -r stylelint

pre-push:
  parallel: true
  commands:
    test:
      run: pnpm -r test
    build:
      run: pnpm -r build

commit-msg:
  commands:
    commitlint:
      run: pnpm commitlint --edit {1}
EOF
else
  echo "✅ Existing Lefthook config found at $CONFIG_FILE"
fi

# List installed hooks (for debugging)
echo "📁 .git/hooks content:"
ls -la .git/hooks

echo "✅ Lefthook setup complete."
