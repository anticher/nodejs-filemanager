import * as path from 'path'
import { getResultMessage } from '../utility/getResultMessage.js'

export const cd = (commandString) => {
    try {
        const cwd = process.cwd().toLowerCase()
        const directoryPath = commandString.substring(3)
        if (directoryPath.toLowerCase().startsWith(cwd)) {
            process.chdir(directoryPath)
        } else {
            process.chdir(path.join(process.cwd(), directoryPath))
        }
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }

}
