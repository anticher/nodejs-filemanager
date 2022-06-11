import { rm } from 'fs/promises'
import { getResultMessage } from '../utility/getResultMessage.js'
import { parsePath } from '../utility/parsePath.js'

export const remove = async (commandString) => {
    try {
        const filePath = parsePath(commandString)
        await rm(filePath)
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }
}
