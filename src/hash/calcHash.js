import * as fs from 'fs/promises'
import { createHmac } from 'crypto'
import { parsePath } from '../utility/parsePath.js'

export const calcHash = async (commandString) => {
    try {
        const filePath = parsePath(commandString)
        const secret = 'abc'
        const text = await fs.readFile(filePath, 'utf8')
        const hash = createHmac('sha256', secret)
            .update(text)
            .digest('hex')
        return hash
    }
    catch {
        return 'Operation failed'
    }
}
