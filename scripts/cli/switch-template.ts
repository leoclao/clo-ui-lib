import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const templates = [
  { name: '🇻🇳 Tiếng Việt (.gitmessage.vi.txt)', value: '.gitmessage.vi.txt' },
  { name: '🇬🇧 English (.gitmessage.en.txt)', value: '.gitmessage.en.txt' }
]

export async function switchTemplate() {
  console.log(chalk.cyan.bold('\n📄 Switch Git Commit Template\n'))

  const current = getCurrentTemplate()
  console.log(`${chalk.gray('Current template:')} ${chalk.yellow(current || '(not set)')}\n`)

  const { selected } = await inquirer.prompt([
    {
      name: 'selected',
      type: 'list',
      message: 'Choose a commit message template:',
      choices: templates
    }
  ])

  const fullPath = path.resolve(process.cwd(), selected)

  if (!fs.existsSync(fullPath)) {
    console.log(chalk.red(`❌ File not found: ${selected}`))
    return
  }

  execSync(`git config commit.template "${fullPath}"`)
  console.log(chalk.green(`✅ Commit template set to ${selected}`))
}

function getCurrentTemplate() {
  try {
    return execSync('git config commit.template', { encoding: 'utf8' }).trim()
  } catch {
    return ''
  }
}