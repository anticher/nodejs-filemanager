import { onProcessExit } from './onProcessExit.js'
import { showDirectory } from './showDirectory.js'
import { showGreetingMessage } from './showGreetingMessage.js'

export let userName = 'Dear Guest'

export const initFunc = () => {
    process.chdir(process.env.HOME)
    process.on('SIGINT', () => {
        onProcessExit()
    })
    const firstArg = process.argv[2]
    if (firstArg.startsWith('--username='))  {
        userName = firstArg.substring(11)
    }
    showGreetingMessage(userName)
    showDirectory()
}