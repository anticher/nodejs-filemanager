import { homedir } from 'os'

export const getHomeDir = () => {
    try {
        if (homedir) {
            return homedir
        }
        throw new Error('no homedir')
    }
    catch {
        return 'Operation failed'
    }
}
