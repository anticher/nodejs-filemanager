import { rename } from 'fs/promises'
import { getResultMessage } from '../utility/getResultMessage.js'
import { parsePaths } from '../utility/parsePaths.js'

export const rn = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        await rename(...paths)
        return getResultMessage('conpleted')
    }
    catch {
        return getResultMessage('failed')
    }
}
