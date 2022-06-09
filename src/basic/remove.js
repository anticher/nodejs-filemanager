import { rm } from 'fs/promises'
import { parsePath } from '../utility/parsePath.js'

export const remove = async (commandString) => {
    try {
        const filePath = parsePath(commandString)
        await rm(filePath)
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
