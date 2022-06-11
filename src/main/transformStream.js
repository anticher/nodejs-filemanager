import { Transform } from 'stream'
import { showDirectory } from './showDirectory.js'
import { up } from '../navigation/up.js'
import { cd } from '../navigation/cd.js'
import { ls } from '../navigation/ls.js'
import { cat } from '../basic/cat.js'
import { add } from '../basic/add.js'
import { rn } from '../basic/rn.js'
import { copy } from '../basic/copy.js'
import { move } from '../basic/move.js'
import { remove } from '../basic/remove.js'
import { calcHash } from '../hash/calcHash.js'
import { zip } from '../zip/main.js'
import { main as osInfo } from '../os/main.js'
import { onProcessExit } from './onProcessExit.js'
import { getResultMessage } from '../utility/getResultMessage.js'

export const transformStream = new Transform({
    async transform(data, encoding, callback) {
        if (encoding !== 'buffer') {
            return getResultMessage('invalid')
        }
        const dataString = data.toString('utf8').trim()
        switch (true) {
            case dataString === '.exit':
                onProcessExit()
                break
            case dataString === 'up':
                callback(null, up() + showDirectory())
                break
            case dataString.startsWith('cd') && dataString.length > 3:
                callback(null, cd(dataString) + showDirectory())
                break
            case dataString === 'ls':
                callback(null, await ls() + showDirectory())
                break
            case dataString.startsWith('cat') && dataString.length > 4:
                callback(null, await cat(dataString) + showDirectory())
                break
            case dataString.startsWith('add') && dataString.length > 4:
                callback(null, await add(dataString) + showDirectory())
                break
            case dataString.startsWith('rn') && dataString.length > 3:
                callback(null, await rn(dataString) + showDirectory())
                break
            case dataString.startsWith('copy')  && dataString.length > 5:
                callback(null, await copy(dataString) + showDirectory())
                break
            case dataString.startsWith('mv') && dataString.length > 3:
                callback(null, await move(dataString) + showDirectory())
                break
            case dataString.startsWith('rm') && dataString.length > 3:
                callback(null, await remove(dataString) + showDirectory())
                break
            case dataString.startsWith('os') && dataString.length > 3:
                callback(null, osInfo(dataString) + showDirectory())
                break
            case dataString.startsWith('hash') && dataString.length > 5:
                callback(null, await calcHash(dataString) + showDirectory())
                break
            case (dataString.startsWith('compress')  && dataString.length > 9) || (dataString.startsWith('decompress') && dataString.length > 11):
                callback(null, await zip(dataString) + showDirectory())
                break
            default:
                callback(null, getResultMessage('invalid') + showDirectory())
                break
        }
    }
})
