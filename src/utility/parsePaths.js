import * as path from 'path'

export const parsePaths = (commandString) => {
    const cwd = process.cwd().toLowerCase()
    const filePathStartIndex = commandString.indexOf(' ') + 1
    const newPathStartIndex = commandString.indexOf(' ', filePathStartIndex) + 1
    let filePath = commandString.substring(filePathStartIndex, newPathStartIndex - 1)
    if (!filePath.toLowerCase().startsWith(cwd)) {
        filePath = path.join(cwd, filePath)
    }
    let newPath = commandString.substring(newPathStartIndex)
    if (!newPath.toLowerCase().startsWith(cwd)) {
        newPath = path.join(cwd, newPath)
    }
    return [filePath, newPath]
}
