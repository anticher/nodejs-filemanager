import { Transform } from 'stream'
import { showDirectory } from './showDirectory.js'

export const transformStream = new Transform({
    transform(data, encoding, callback) {
        if (encoding !== 'buffer') {
            return
        }

        const resultString = 'transform !!!' + showDirectory()
        callback(null, resultString)
    }
})
