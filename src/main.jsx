import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import baseRouter from "./BaseRouter.jsx";
import {RouterProvider} from "react-router";

const router = baseRouter()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
