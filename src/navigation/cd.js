import * as path from 'path'

export const cd = (commandString) => {
    try {
        const cwd = process.cwd().toLowerCase()
        const directoryPath = commandString.substring(3)
        if (directoryPath.toLowerCase().startsWith(cwd)) {
            process.chdir(directoryPath)
        } else {
            process.chdir(path.join(process.cwd(), directoryPath))
        }
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }

}
