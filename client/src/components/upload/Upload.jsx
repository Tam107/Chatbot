import React, {useRef} from 'react'
import {IKContext, IKUpload} from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/dad8yjrvg"
const publicKey = 'public_u1bzyX5O9dgGQE4zOZl1EyJS8yw='

const authenticator = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/upload");
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Request failed with status ${response.status}: ${errorText}`
            );
        }
        const data = await response.json();
        const {signature, expire, token} = data;
        return {signature, expire, token};

    } catch (e) {
        console.log("Authentication request failed: ", e)
    }
}

const Upload = ({setImg}) => {
    const ikUploadRef = useRef(null);
    const onError = (err) => {
        console.log(err);
    }

    const onSuccess = (data) => {
        console.log(data+" Success");
        setImg((prev => ({...prev, isLoading: false, dbData: data})));
    }

    const onUploadProgress = progress => {
        console.log("Progress", progress);
    };

    const onUploadStart = evt => {
        console.log("Start", evt);
        setImg((prev => ({...prev, isLoading: false})));
    };

    return (
        <>
            <div>
                <IKContext urlEndpoint={urlEndpoint}
                           publicKey={publicKey}
                           authenticator={authenticator}>
                    <IKUpload fileName={"test-upload.png"}
                              onError={onError}
                              onSuccess={onSuccess}
                              onUploadProgress={onUploadProgress}
                              onUploadStart={onUploadStart}
                              style={{display: "none"}}
                              ref={ikUploadRef}
                    />

                    {
                        <label onClick={() => ikUploadRef.current.click()}>
                            <img src="/attachment.png" alt=""/>
                        </label>
                    }

                </IKContext>
            </div>
        </>
    )
}
export default Upload
