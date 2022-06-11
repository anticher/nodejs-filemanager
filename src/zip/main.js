import { createBrotliCompress, createBrotliDecompress } from 'zlib'
import { parsePaths } from '../utility/parsePaths.js'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createReadStream, createWriteStream } from 'fs'
import { getResultMessage } from '../utility/getResultMessage.js'

export const zip = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        const source = createReadStream(paths[0])
        const destination = createWriteStream(paths[1])
        let brotli
        if (commandString.startsWith('compress')) {
            brotli = createBrotliCompress()
        } else if (commandString.startsWith('decompress')) {
            brotli = createBrotliDecompress()
        }
        const pipelineAsync = promisify(pipeline)
        await pipelineAsync(source, brotli, destination)
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }
}
