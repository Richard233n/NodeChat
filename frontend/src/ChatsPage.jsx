import { PrettyChatWindow } from "react-chat-engine-pretty"


const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="ff872119-f505-4217-9433-f0c09f29274a"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>

    )
}
export default ChatsPage