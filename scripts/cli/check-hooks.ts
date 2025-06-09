import chalk from 'chalk'
import fs from 'fs'

export async function checkHooks() {
  console.log(chalk.cyan.bold('\n🔍 Checking Git Hooks Setup\n'))

  const lefthook = fs.existsSync('.lefthook.yml')
  const husky = fs.existsSync('.husky/')

  if (lefthook) {
    console.log(chalk.green('✅ Lefthook config found (.lefthook.yml)'))
  } else {
    console.log(chalk.yellow('⚠️ Lefthook not configured'))
  }

  if (husky) {
    console.log(chalk.green('✅ Husky folder found (.husky/)'))
  } else {
    console.log(chalk.yellow('⚠️ Husky not configured'))
  }

  if (!lefthook && !husky) {
    console.log(chalk.red('❌ No Git hook manager detected.'))
  }

  console.log('')
}
