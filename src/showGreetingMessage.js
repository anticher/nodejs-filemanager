import { showDirectory } from "./showDirectory.js"

export const showGreetingMessage = () => {
    process.chdir(process.env.HOME)
    process.stdout.write('Welcome to the File Manager, Username!' + showDirectory())
}
