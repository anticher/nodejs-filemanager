export const parseArg = (commandString) => {
    const argStartIndex = commandString.indexOf(' ') + 1
    const args = commandString.substring(argStartIndex)
    return args
}
