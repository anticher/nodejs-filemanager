import { userName } from './initFunc.js'
import { showLeaveMessage} from './showLeaveMessage.js'

export const onProcessExit = () => {
    showLeaveMessage(userName)
    process.exit(0)
}
