import { readUserInput } from './main/readUserInput.js'
import { initFunc } from './main/initFunc.js'

const mainFlow = () => {
    initFunc()
    readUserInput()
} 

mainFlow()
