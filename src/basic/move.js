import { copyFile, rm } from 'fs/promises'
import { getResultMessage } from '../utility/getResultMessage.js'
import { parsePaths } from '../utility/parsePaths.js'

export const move = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        await copyFile(...paths)
        await rm(paths[0])
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }
}
