#!/bin/bash

set -e

echo "🧪 Kiểm tra Lefthook..."

# Kiểm tra lefthook đã cài chưa
if ! command -v lefthook &> /dev/null; then
  echo "❌ Lefthook chưa được cài. Vui lòng chạy ./scripts/setup-lefthook.sh trước."
  exit 1
fi

echo "✅ Lefthook đã được cài."

echo "🚀 Danh sách hook đang kích hoạt:"
lefthook run --all --no-verify

echo "📋 Danh sách hook cấu hình:"
cat .lefthook/config.yml

echo "✅ Kiểm tra cấu hình Lefthook hoàn tất."
