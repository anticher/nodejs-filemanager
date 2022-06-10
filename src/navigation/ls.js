import { readdir } from 'fs/promises'

export const ls = async () => {
    try {
        const folderPath = process.cwd()
        const files = await readdir(folderPath)
        return files
    }
    catch {
        return 'Operation failed'
    }
}
