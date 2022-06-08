export const cd = (commandString) => {
    try {
        const path = commandString.substring(3)
        if (path.startsWith('.')) {
            process.chdir(path)
        } else {
            process.chdir(process.cwd() + '/' + path)
        }
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }

}
