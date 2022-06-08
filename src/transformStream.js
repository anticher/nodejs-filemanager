import { Transform } from 'stream'
import { showDirectory } from './showDirectory.js'
import { up } from './navigation/up.js'
import { cd } from './navigation/cd.js'
import { ls } from './navigation/ls.js'

export const transformStream = new Transform({
    async transform(data, encoding, callback) {
        if (encoding !== 'buffer') {
            return
        }
        const dataString = data.toString('utf8').trim()
        if (dataString === 'up') {
            const resultString = up() + showDirectory()
            callback(null, resultString)
        } else if (dataString.startsWith('cd')) {
            const resultString = cd(dataString) + showDirectory()
            callback(null, resultString)
        } else if (dataString === 'ls') {
            const resultString = await ls() + showDirectory()
            callback(null, resultString)
            // }else if (dataString === 'unknown') {
            //     const resultString = '\x1b[36m\n' + 'Invalid input' + '\x1b[97m\n' + showDirectory()
            //     callback(null, resultString)
            // } else if (dataString === 'error') {
            //     const resultString = 'Operation failed' + showDirectory()
            //     callback(null, resultString)
        } else {
            const resultString = 'transform !!!' + showDirectory()
            callback(null, resultString)
        }
    }
})
