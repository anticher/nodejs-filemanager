import { writeFile } from 'fs/promises'
import { parsePath } from '../utility/parsePath.js'

export const add = async (commandString) => {
    try {
        const filePath = parsePath(commandString)
        await writeFile(filePath, '')
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
