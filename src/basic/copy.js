import { parsePaths } from '../utility/parsePaths.js'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

export const copy = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        const source = createReadStream(paths[0])
        const destination = createWriteStream(paths[1])
        pipeline(source, destination, (err) => {
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
