import { copyFile, rm } from 'fs/promises'
import { parsePaths } from '../utility/parsePaths.js'

export const move = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        await copyFile(...paths)
        await rm(paths[0])
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
