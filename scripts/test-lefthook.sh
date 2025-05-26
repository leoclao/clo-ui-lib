#!/bin/bash

set -e

echo "🧪 Kiểm tra Lefthook..."

# Kiểm tra lefthook đã cài chưa
# if ! command -v lefthook &> /dev/null; then
#   echo "❌ Lefthook chưa được cài. Vui lòng chạy ./scripts/setup-lefthook.sh trước."
#   exit 1
# fi
if ! npx lefthook version &> /dev/null; then
  echo "❌ Lefthook chưa được cài. Vui lòng chạy ./scripts/setup-lefthook.sh trước."
  exit 1
fi

# Kiểm tra quyền thực thi của lefthook
if [ ! -x "$(command -v lefthook)" ]; then
  echo "❌ Lefthook không có quyền thực thi. Vui lòng kiểm tra lại."
  exit 1
fi

echo "✅ Lefthook đã được cài."

# Hiển thị danh sách hook đang kích hoạt
echo "🚀 Danh sách hook đang kích hoạt:"
grep -E '^[a-z]+:' .lefthook/config.yml | grep -v 'commands' | sed 's/://'

# Thử chạy từng hook để kiểm tra hoạt động
for hook in pre-commit pre-push commit-msg; do
  echo "🧪 Đang chạy thử hook: $hook"
  npx lefthook run $hook || echo "⚠️ Hook $hook lỗi hoặc không có gì để chạy"
done

# Kiểm tra file cấu hình Lefthook
CONFIG_FILE=".lefthook/config.yml"
if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ File cấu hình Lefthook ($CONFIG_FILE) không tồn tại."
  exit 1
fi

# Hiển thị cấu hình Lefthook
echo "📋 Danh sách hook cấu hình:"
cat .lefthook/config.yml

echo "✅ Kiểm tra cấu hình Lefthook hoàn tất."
