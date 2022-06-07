// import { createReadStream, createWriteStream } from 'fs'
// import * as path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

import { showGreetingMessage } from './showGreetingMessage.js'
import { showLeaveMessage } from './showLeaveMessage.js'
import { readUserInput } from './readUserInput.js'

const mainFlow = async () => {
    showGreetingMessage()
    readUserInput()
    process.on('SIGINT', function () {
        showLeaveMessage()
        process.exit(0)
    })
    
} 

mainFlow()


