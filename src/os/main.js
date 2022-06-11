import { getEol } from './getEol.js'
import { getCpus } from './getCpus.js'
import { getHomeDir } from './getHomeDir.js'
import { getUserName } from './getUserName.js'
import { getArch } from './getArch.js'
import { parseArg } from '../utility/parseArg.js'
import { getResultMessage } from '../utility/getResultMessage.js'

export const main = (commandString) => {
    const argument = parseArg(commandString)
    switch (true) {
        case argument === '--EOL':
            return getEol()
        case argument === '--cpus':
            return getCpus()
        case argument === '--homedir':
            return getHomeDir()
        case argument === '--username':
            return getUserName()
        case argument === '--architecture':
            return getArch()
        default:
            return getResultMessage('invalid')
    }
}
