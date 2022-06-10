import * as fs from 'fs/promises'
// import * as path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
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
