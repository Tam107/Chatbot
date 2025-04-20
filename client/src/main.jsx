import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider}  from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import Homepage from "./page/homePage/Homepage.jsx";
import SignInPage from "./page/signInPage/SignInPage.jsx";
import SignUpPage from "./page/signUpPage/SignUpPage.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import DashboardPage from "./page/dashboardPage/DashboardPage.jsx";
import ChatPage from "./page/chatPage/ChatPage.jsx";

const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path: "sign-in/*",
                element: <SignInPage/>,
            },
            {
                path: "sign-up/*",
                element: <SignUpPage/>,
            },
            {
                element: <DashboardLayout/>,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage/>,
                    },
                    {
                        path: "dashboard/chats/:id",
                        element: <ChatPage/>,
                    }
                ]
            }
        ]
    }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
