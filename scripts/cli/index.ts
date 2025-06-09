import inquirer from "inquirer";
import { switchTemplate } from "./switch-template";
import { checkHooks } from "./check-hooks";
import { checkCommitlint } from "./check-commitlint";
import { resetGitConfig } from "./reset-config";

async function main() {
  const { action } = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "🛠 What do you want to do?",
      choices: [
        { name: "📄 Switch Git commit template", value: "switch" },
        { name: "🔍 Check Git hooks (lefthook / husky)", value: "hooks" },
        { name: "🧪 Check commitlint setup", value: "commitlint" },
        { name: "♻️ Reset Git local config (template, user)", value: "reset" },
        { name: "❌ Exit", value: "exit" },
      ],
    },
  ]);

  switch (action) {
    case "switch":
      await switchTemplate();
      break;
    case "hooks":
      await checkHooks();
      break;
    case "commitlint":
      await checkCommitlint();
      break;
    case "reset":
      await resetGitConfig();
      break;
    case "exit":
      console.log("Exiting...");
      process.exit(0);
  }
}

main();
