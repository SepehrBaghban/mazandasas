import {createBrowserRouter} from "react-router";
import App from "./App.jsx";
import MainPageLayout from "@pages/MainPage/MainPageLayout.jsx";


const Routes = [
    {
        element: <App/>,
        errorElement: <p>error...</p>,
        children: [
            {
                path: "/",
                errorElement: <p>error...</p>,
                element: <MainPageLayout/>,
            }
        ]

    }

]


export default function baseRouter() {
    return createBrowserRouter([...Routes])
}

