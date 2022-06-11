import { getResultMessage } from "../utility/getResultMessage.js"

export const up = () => {
    if (process.cwd() !== process.env.HOME) {
        process.chdir('..')
        return getResultMessage('completed')
    }
    return getResultMessage('failed')
}
