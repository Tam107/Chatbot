import React, {useEffect} from 'react'
import {Outlet, useNavigate, useNavigation} from "react-router-dom";
import {useAuth} from "@clerk/clerk-react";
import ChatList from "../../components/chatList/ChatList.jsx";
import "./dashboardLayout.css"

const DashboardLayout = () => {

    const {userId, isLoaded} = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    },[isLoaded, userId, navigate])

    // skeleton
    if(!isLoaded) {
        return "Loading..."
    }

    return (
        <div className={"dashboardLayout"}>
            <div className={"menu"}>
                <ChatList/>
            </div>
            <div className={"content"}>
                <Outlet/>
            </div>
        </div>
    )
}
export default DashboardLayout
