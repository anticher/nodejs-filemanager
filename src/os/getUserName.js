import { userInfo } from 'os'

export const getUserName = () => {
    try {
        const userName = userInfo().username
        if (userName) {
            return userName
        }
        throw new Error('no userName')
    }
    catch {
        return 'Operation failed'
    }
}
