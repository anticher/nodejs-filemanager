export const up = () => {
    if (process.cwd() !== process.env.HOME) {
        process.chdir('..')
        return 'Operation completed'
    }
    return 'you are already in the root folder'
}
