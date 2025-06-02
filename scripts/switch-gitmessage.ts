import inquirer from "inquirer";
import { execSync } from "child_process";
import chalk from "chalk";
import fs from "fs";
import path from "path";

const options = [
  {
    name: "🇻🇳 Tiếng Việt (.gitmessage.vi.txt)",
    value: ".gitmessage.vi.txt",
  },
  { name: "🇬🇧 English (.gitmessage.en.txt)", value: ".gitmessage.en.txt" },
];

// Check if .gitmessage file exists
function fileExits(filePath: string): boolean {
  return fs.existsSync(path.resolve(process.cwd(), filePath));
}

// Set the git message template
function setGitMessageTemplate(templatePath: string): void {
  execSync(`git config commit.template "${templatePath}"`);
  console.log(chalk.green(`✅ Commit template set to: ${templatePath}`));
}

// Show template currently in use
function getCurrentTemplate(): string {
  try {
    const result = execSync(`git config commit.template`, { encoding: "utf8" });
    return result.trim();
  } catch {
    return chalk.gray("No commit template is currently set.");
  }
}

// Main function to switch git message template
async function switchGitMessage(): Promise<void> {
  console.log(chalk.cyan.bold("\n🛠 Switch Git Commit Template\n"));

  console.log(
    `${chalk.gray("Current template:")} ${chalk.yellow(getCurrentTemplate())}\n`
  );

  const { selected } = await inquirer.prompt([
    {
      type: "list",
      name: "selected",
      message: "Choose a commit message template:",
      choices: options,
    },
  ]);

  if (!fileExits(selected)) {
    console.error(chalk.red(`\n❌ File does not exist: ${selected}\n`))
    process.exit(1);
  }

  setGitMessageTemplate(selected)
  console.log(chalk.blue(`\n📌 You can now commit using your new template.`))
  console.log(chalk.gray(`→ Run "git config commit.template" to confirm.\n`))
}

switchGitMessage();
