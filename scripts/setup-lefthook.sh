#!/bin/bash

set -e

echo "🔍 Checking for Husky and Git hook remnants..."

# Remove .husky folder if exists
if [ -d ".husky" ]; then
  echo "🧹 Removing .husky/ directory..."
  rm -rf .husky
fi

# Remove .git/hooks if exists
if [ -d ".git/hooks" ]; then
  echo "🧹 Removing old .git/hooks directory..."
  rm -rf .git/hooks
fi

# Reinstall Lefthook if not present
if ! command -v lefthook &> /dev/null; then
  echo "📦 Installing Lefthook (as devDependency in root workspace)..."
  pnpm add -D -w lefthook
fi

echo "🔧 Installing Lefthook hooks..."
npx lefthook install

# Generate default config.yml if missing
CONFIG_FILE=".lefthook/config.yml"
if [ ! -f "$CONFIG_FILE" ]; then
  echo "📄 Creating default .lefthook/config.yml..."
  mkdir -p .lefthook
  cat <<EOF > $CONFIG_FILE
pre-commit:
  parallel: true
  commands:
    lint:
      run: pnpm lint
    test:
      run: pnpm test

commit-msg:
  commands:
    commitlint:
      run: npx commitlint --edit \$1
EOF
else
  echo "✅ Existing Lefthook config found at $CONFIG_FILE"
fi

echo "✅ Lefthook setup complete."

echo "📁 .git/hooks content:"
ls -la .git/hooks
