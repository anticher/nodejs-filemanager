import { homedir } from 'os'
import { getResultMessage } from '../utility/getResultMessage.js'

export const getHomeDir = () => {
    try {
        if (homedir) {
            return homedir
        }
        throw new Error('no homedir')
    }
    catch {
        return getResultMessage('failed')
    }
}
