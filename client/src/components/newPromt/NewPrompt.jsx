import React, {useEffect, useRef} from 'react'
import "./newPrompt.css"

const NewPrompt = () => {

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }, [])

    return (
        <>
            <div className={"endChat"} ref={endRef}>
                <div className={"newPrompt"}>
                    <form action="" className={"newForm"}>
                        <label htmlFor="file">
                            <img src="/attachment.png" alt=""/>
                        </label>
                        <input id={"file"} type="file" multiple={false} hidden={true}/>
                        <input type="text" placeholder="Ask anything"/>
                        <button>
                            <img src="/arrow.png" alt=""/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default NewPrompt
