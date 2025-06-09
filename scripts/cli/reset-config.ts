import inquirer from 'inquirer'
import chalk from 'chalk'
import { execSync } from 'child_process'

export async function resetGitConfig() {
  console.log(chalk.cyan.bold('\n♻️ Resetting Git Local Config\n'))

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: '⚠️ Are you sure you want to reset commit.template and local Git identity?',
      default: false
    }
  ])

  if (!confirm) {
    console.log(chalk.gray('Reset canceled.\n'))
    return
  }

  try {
    execSync('git config --unset commit.template', { stdio: 'ignore' })
    execSync('git config --unset user.name', { stdio: 'ignore' })
    execSync('git config --unset user.email', { stdio: 'ignore' })

    console.log(chalk.green('✅ Git local config reset.'))
  } catch (err) {
    console.log(chalk.yellow('⚠️ Some keys may not have been set originally.'));
    if (err instanceof Error) {
      console.error(chalk.red('Error details:'), err.message);
    } else {
      console.error(chalk.red('Unknown error occurred during git config reset.'));
    }
    throw err;
  }

  console.log('')
}
