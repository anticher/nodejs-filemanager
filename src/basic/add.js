import { parsePath } from '../utility/parsePath.js'
import { createWriteStream } from 'fs'
import { getResultMessage } from '../utility/getResultMessage.js'

const write = (destination) => {
    return new Promise((resolve, reject) => {
        const wtitableStream = createWriteStream(destination)
        wtitableStream.write('', 'utf-8')
        wtitableStream.on('finish', () => {
            resolve()
        })
        wtitableStream.on('error', () => {
            reject()
        })
        wtitableStream.end()
    })
}

export const add = async (commandString) => {
    try {
        const filePath = parsePath(commandString)
        await write(filePath)
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('completed')
    }
}
