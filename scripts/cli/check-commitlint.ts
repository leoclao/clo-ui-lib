import chalk from 'chalk'
import fs from 'fs'

export async function checkCommitlint() {
  console.log(chalk.cyan.bold('\n🧪 Checking Commitlint Setup\n'))

  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

  const hasCommitlint = pkg.devDependencies?.['@commitlint/cli'] || pkg.dependencies?.['@commitlint/cli']
  const hasConfig =
    fs.existsSync('commitlint.config.js') ||
    fs.existsSync('commitlint.config.ts') ||
    !!pkg.commitlint

  if (hasCommitlint) {
    console.log(chalk.green('✅ commitlint installed'))
  } else {
    console.log(chalk.red('❌ commitlint is not installed'))
  }

  if (hasConfig) {
    console.log(chalk.green('✅ commitlint config found'))
  } else {
    console.log(chalk.yellow('⚠️ No commitlint config found'))
  }

  console.log('')
}
