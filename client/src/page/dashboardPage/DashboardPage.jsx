import React from 'react'
import "./dashboardPage.css"

const DashboardPage = () => {
    return (
        <div className={"dashboardPage"}>
            <div className={"texts"}>
                <div className={"logo"}>
                    {/*<img src="/logo.png" alt=""/>*/}
                    <h2>How can i help you?</h2>
                </div>
                <div className={"options"}>
                    <div className={"option"}>
                        <img src="/chat.png" alt=""/>
                        <span>Create a new chat</span>
                    </div>

                    <div className={"option"}>
                        <img src="/image.png" alt=""/>
                        <span>Analyze Images</span>
                    </div>

                    <div className={"option"}>
                        <img src="/code.png" alt=""/>
                        <span>Help me with my code</span>
                    </div>

                </div>
            </div>
            <div className={"formContainer"}>
                <form action="">
                    <input type="text" placeholder="Ask me anything...." />
                    <button>
                        <img src="/arrow.png" alt=""/>
                    </button>
                </form>
            </div>

        </div>
    )
}
export default DashboardPage
