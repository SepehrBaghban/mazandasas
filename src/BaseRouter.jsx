import {createBrowserRouter} from "react-router";
import App from "./App.jsx";
import {lazy, Suspense} from "react";
import TruckLoader from "@components/Loaders/TruckLoader.jsx";

const MainPageLayout = lazy(() => import("@pages/MainPage/MainPageLayout.jsx"));


const Routes = [
    {
        element: <App/>,
        errorElement: <p>error...</p>,
        children: [
            {
                path: "/",
                errorElement: <p>error...</p>,
                element:
                    <Suspense fallback={<TruckLoader fullScreen/>}>
                        <MainPageLayout/>
                    </Suspense>
            }
        ]

    }

]


export default function baseRouter() {
    return createBrowserRouter([...Routes])
}

