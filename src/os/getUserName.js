import { userInfo } from 'os'
import { getResultMessage } from '../utility/getResultMessage.js'

export const getUserName = () => {
    try {
        const userName = userInfo().username
        if (userName) {
            return userName
        }
        throw new Error('no userName')
    }
    catch {
        return getResultMessage('failed')
    }
}
