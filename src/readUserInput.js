import { transformStream } from "./transformStream.js"

export const readUserInput = async () => {
    try {
        process.stdin.pipe(transformStream).pipe(process.stdout)
    }
    catch (e) {
        console.log("\x1b[31m", e)
    }
}
