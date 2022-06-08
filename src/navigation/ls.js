import { readdir } from 'fs/promises'

export const ls = async () => {
    try {
        const folderPath = process.cwd()
        const files = await readdir(folderPath)
        console.log(files)
        return 'Operation completed'
    }
    catch {
        return 'Operation failed'
    }
}
