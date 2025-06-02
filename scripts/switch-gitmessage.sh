set -e

# Colors
GREEN="\033[0;32m"
RED='\033[0;31m'
CYAN='\033[0;36m'
RESET="\033[0m"

# File template
VI_FILE=".gitmessage.vi.txt"
EN_FILE=".gitmessage.en.txt"

# Check if the files exist
check_file_exists() {
    if [ ! -f "$1" ]; then
        echo -e "${RED}❌ Vietnamese commit message template not found: $1${RESET}"
        exit 1
    fi
}

# Show usage
usage() {
  echo -e "${CYAN}Usage:${RESET} ./scripts/switch-gitmessage.sh [vi|en]"
  echo -e "  vi → Set commit message template to Vietnamese"
  echo -e "  en → Set commit message template to English"
  echo ""
  echo -e "${CYAN}Current commit template:${RESET}"
  git config commit.template || echo "(not set)"
  exit 1
}

# Main logic
case "$1" in
  vi)
    check_file_exists "$VI_FILE"
    git config commit.template "$VI_FILE"
    echo -e "${GREEN}✅ Commit template switched to Vietnamese (${VI_FILE})${RESET}"
    ;;
  en)
    check_file_exists "$EN_FILE"
    git config commit.template "$EN_FILE"
    echo -e "${GREEN}✅ Commit template switched to English (${EN_FILE})${RESET}"
    ;;
  *)
    usage
    ;;
esac
