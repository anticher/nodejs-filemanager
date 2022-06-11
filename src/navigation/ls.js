import { readdir } from 'fs/promises'
import { pipeline, Writable, Readable } from 'stream'
import { promisify } from 'util'
import { getResultMessage } from '../utility/getResultMessage.js'

export const ls = async () => {
    try {
        const folderPath = process.cwd()
        const writeStream = new Writable({
            async write(data, encoding, callback) {
                const dataString = data.toString('utf8').trim()
                console.log('\x1b[32m' + dataString + '\x1b[97m')
                callback()
            }
        })
        const pipelineAsync = promisify(pipeline)
        console.log('-----')
        await pipelineAsync(Readable.from(await readdir(folderPath)), writeStream)
        return '-----'
    }
    catch{
        return getResultMessage('failed')
    }
}
