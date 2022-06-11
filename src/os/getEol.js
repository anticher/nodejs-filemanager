import { EOL } from 'os'
import { getResultMessage } from '../utility/getResultMessage.js'

export const getEol = () => {
    try {
        const eol = EOL
        if (eol) {
            return JSON.stringify(eol)
        }
        throw new Error('no EOL')
    }
    catch {
        return getResultMessage('failed')
    }
}
