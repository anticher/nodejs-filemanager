import { cpus } from 'os'
import { getResultMessage } from '../utility/getResultMessage.js'

export const getCpus = () => {
    try {
        const cpusInfo = cpus()
        if (cpusInfo) {
            const result = []
            result[0] = 'amount of CPUS: ' + cpusInfo.length + '\n'
            cpusInfo.forEach((element) => {
                const model = element.model
                const clockRateIndex = model.indexOf('@') + 2
                const cpuModel = model.substring(0, clockRateIndex - 3)
                const clockRate = model.substring(clockRateIndex)
                result.push('model: ' + cpuModel)
                result.push('clockRate: ' + clockRate + '\n')
            })
            return '\x1b[32m' + result.join('\n') + '\x1b[97m'
        }
        throw new Error('no cpuInfo')
    }
    catch {
        return getResultMessage('failed')
    }
}
