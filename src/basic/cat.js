import { createReadStream } from 'fs'
import { parsePath } from '../utility/parsePath.js'

const readFile = async (filePath) => {
    return new Promise((resolve, reject) => {
        let buffer = ''
        const readableStream = createReadStream(filePath, 'utf8')
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
        const filePath = parsePath(commandString)
        const result = await readFile(filePath)
        return 'Operation completed, result is:\n' + result
    }
    catch {
        return 'Operation failed'
    }
}
