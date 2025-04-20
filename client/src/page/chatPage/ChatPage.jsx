import React, {useEffect, useRef} from 'react'
import "./chatPage.css"
import NewPromt from "../../components/newPromt/NewPrompt.jsx";
import NewPrompt from "../../components/newPromt/NewPrompt.jsx";

const ChatPage = () => {

    // lưu trữ một giá trị không gây re-render



    return (
        <div className={"chatPage"}>
            <div className={"wrapper"}>
                <div className={"chat"}>
                    <div className={"message"}>Test message AI</div>
                    <div className={"message user"}>Test message from user</div>

                    <div className={"message"}>Test message AI</div>
                    <div className={"message user"}>Test message from user</div>
                    <NewPrompt/>

                </div>
            </div>

        </div>
    )
}
export default ChatPage
