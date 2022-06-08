import { createReadStream } from 'fs'
import * as path from 'path'


const readFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        let buffer = ''
        const readableStream = createReadStream(path.join(process.cwd(), filePath), 'utf8')
        readableStream.on('data', (chunk) => {
            buffer += chunk
        })
        readableStream.on('end', () => {
            resolve(buffer)
        })
    })
}

export const cat = async (commandString) => {
    try {
        const filePath = commandString.substring(4)
        const result = await readFile(filePath)
        return 'Operation completed, result is:\n' + result
    }
    catch {
        return 'Operation failed'
    }

}
