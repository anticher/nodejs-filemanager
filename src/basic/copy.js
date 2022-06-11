import { parsePaths } from '../utility/parsePaths.js'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'
import { getResultMessage } from '../utility/getResultMessage.js'
import { promisify } from 'util'

export const copy = async (commandString) => {
    try {
        const paths = parsePaths(commandString)
        const source = createReadStream(paths[0])
        const destination = createWriteStream(paths[1])
        const pipelineAsync = promisify(pipeline)
        await pipelineAsync(source, destination)
        return getResultMessage('completed')
    }
    catch {
        return getResultMessage('failed')
    }
}
