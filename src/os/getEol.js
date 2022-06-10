import { EOL } from 'os'

export const getEol = () => {
    try {
        const eol = EOL
        if (eol) {
            return JSON.stringify(eol)
        }
        throw new Error('no EOL')
    }
    catch {
        return 'Operation failed'
    }
}
