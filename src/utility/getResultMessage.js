export const getResultMessage = (status) => {
    switch (status) {
        case 'completed':
            return '\x1b[32m' + 'Operation completed' + '\x1b[97m'
        case 'invalid':
            return '\x1b[33m' + 'Invalid input' + '\x1b[97m'
        case 'failed':
            return '\x1b[31m' + 'Operation failed' + '\x1b[97m'
        default:
            return '\x1b[33m' + 'unknown status' + '\x1b[97m'
    }
}
