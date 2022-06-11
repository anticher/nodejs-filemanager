import { arch } from 'os'
import { getResultMessage } from '../utility/getResultMessage.js'

export const getArch = () => {
    try {
        const architecture = arch()
        if (architecture) {
            return architecture
        }
        throw new Error('no architecture')
    }
    catch {
        return getResultMessage('failed')
    }
}
