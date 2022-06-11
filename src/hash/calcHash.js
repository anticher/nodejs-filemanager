import { createHmac } from 'crypto'
import { parsePath } from '../utility/parsePath.js'
import { pipeline, Transform, Writable } from 'stream'
import { createReadStream } from 'fs'
import { promisify } from 'util'
import { getResultMessage } from '../utility/getResultMessage.js'

export const calcHash = async (commandString) => {
    try {
        const pipelineAsync = promisify(pipeline)
        const filePath = parsePath(commandString)
        const source = createReadStream(filePath)
        const transformStream = new Transform({
            async transform(data, encoding, callback) {
                if (encoding !== 'buffer') {
                    return 'Invalid input'
                }
                const dataString = data.toString('utf8').trim()
                const secret = 'abc'
                const hash = createHmac('sha256', secret)
                    .update(dataString)
                    .digest('hex')
                callback(null, hash)
            }
        })
        const writeStream = new Writable({
            async write(data, encoding, callback) {
                const dataString = data.toString('utf8').trim()
                console.log(dataString)
                callback()
            }
        })
        await pipelineAsync(source, transformStream, writeStream)
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }
}
