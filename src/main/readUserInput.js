import { transformStream } from './transformStream.js'
import { pipeline } from 'stream'

export const readUserInput = () => {
    try {
        pipeline(process.stdin, transformStream, process.stdout, (err) => {
            if (err) {
                throw new Error('readUserInput operation failed')
            }
        })
    }
    catch (e) {
        console.log("\x1b[31m", e)
    }
}
