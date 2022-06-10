import { arch } from 'os'

export const getArch = () => {
    try {
        const architecture = arch()
        if (architecture) {
            return architecture
        }
        throw new Error('no architecture')
    }
    catch {
        return 'Operation failed'
    }
}
