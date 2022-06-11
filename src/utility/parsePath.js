import * as path from 'path'

export const parsePath = (commandString) => {
    const cwd = process.cwd().toLowerCase()
    const filePathStartIndex = commandString.indexOf(' ') + 1
    let filePath = commandString.substring(filePathStartIndex)
    if (!filePath.toLowerCase().startsWith(cwd)) {
        filePath = path.join(cwd, filePath)
    }
    return filePath
}
