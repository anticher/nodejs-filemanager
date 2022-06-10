import { Transform } from 'stream'
import { showDirectory } from './showDirectory.js'
import { up } from './navigation/up.js'
import { cd } from './navigation/cd.js'
import { ls } from './navigation/ls.js'
import { cat } from './basic/cat.js'
import { add } from './basic/add.js'
import { rn } from './basic/rn.js'
import { copy } from './basic/copy.js'
import { move } from './basic/move.js'
import { remove } from './basic/remove.js'
import { calcHash } from './hash/calcHash.js'
import { zip } from './zip/main.js'
import { main as osInfo } from './os/main.js'

export const transformStream = new Transform({
    async transform(data, encoding, callback) {
        if (encoding !== 'buffer') {
            return
        }
        const dataString = data.toString('utf8').trim()
        switch (true) {
            case dataString === 'up':
                callback(null, up() + showDirectory())
                break
            case dataString.startsWith('cd'):
                callback(null, cd(dataString) + showDirectory())
                break
            case dataString === 'ls':
                callback(null, await ls() + showDirectory())
                break
            case dataString.startsWith('cat'):
                callback(null, await cat(dataString) + showDirectory())
                break
            case dataString.startsWith('add'):
                callback(null, await add(dataString) + showDirectory())
                break
            case dataString.startsWith('rn'):
                callback(null, await rn(dataString) + showDirectory())
                break
            case dataString.startsWith('copy'):
                callback(null, await copy(dataString) + showDirectory())
                break
            case dataString.startsWith('move'):
                callback(null, await move(dataString) + showDirectory())
                break
            case dataString.startsWith('rm'):
                callback(null, await remove(dataString) + showDirectory())
                break
                case dataString.startsWith('os'):
                callback(null, osInfo(dataString) + showDirectory())
                break
                case dataString.startsWith('hash'):
                callback(null, await calcHash(dataString) + showDirectory())
                break
                case dataString.startsWith('compress') || dataString.startsWith('decompress'):
                callback(null, await zip(dataString) + showDirectory())
                break
            default:
                callback(null, 'transform default' + showDirectory())
                break
        }
    }
})
