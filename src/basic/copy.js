import { copyFile } from 'fs/promises'
import { parsePaths } from '../utility/parsePaths.js'

export const copy = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        await copyFile(...paths)
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
