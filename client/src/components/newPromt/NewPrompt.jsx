import React, {useEffect, useRef, useState} from 'react'
import "./newPrompt.css"
import Upload from "../upload/Upload.jsx";
import {IKImage} from "imagekitio-react";

const NewPrompt = () => {

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {}
    });

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }, [])

    return (
        <>
            {img.isLoading && (<div>Loading....</div>)}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width="300"
                    transformation={[{width: 380}]}/>
            )}
            <div className={"endChat"} ref={endRef}></div>

            <form action="" className={"newForm"}>
                <Upload setImg={setImg}/>
                <input id={"file"} type="file" multiple={false} hidden={true}/>
                <input type="text" placeholder="Ask anything"/>
                <button>
                    <img src="/arrow.png" alt=""/>
                </button>
            </form>


        </>
    )
}
export default NewPrompt
