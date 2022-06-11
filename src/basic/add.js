import { parsePath } from '../utility/parsePath.js'
import { createWriteStream } from 'fs'
import { getResultMessage } from '../utility/getResultMessage.js'

const write = (destination) => {
    return new Promise((resolve, reject) => {
        const writeStream = createWriteStream(destination)
        writeStream.write('', 'utf-8')
        writeStream.on('finish', () => {
            resolve()
        })
        writeStream.end()
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
