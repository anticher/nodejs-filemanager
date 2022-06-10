import { createBrotliCompress, createBrotliDecompress } from 'zlib'
import { parsePaths } from '../utility/parsePaths.js'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

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
        } else {
            throw new Error('Invalid input')
        }
        pipeline(source, brotli, destination, (err) => {
            if (err) {
                throw new Error('ZIP operation failed')
            }
        })
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
