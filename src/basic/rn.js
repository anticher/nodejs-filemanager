import { rename } from 'fs/promises'
import { parsePaths } from '../utility/parsePaths.js'

export const rn = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        await rename(...paths)
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
