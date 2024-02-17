import {RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultPage from "./DefaultPage";
import Dashboard from '../scenes/dashboard'
import Predictions from "@/scenes/predictions";
const Routes = ()=>{
    const routesForPublic = [
        {
            path:"/",
            element:<DefaultPage/>,
            children:[
                {
                    path:"/",
                    element:<Dashboard/>
                },
                {
                    path:"/predictions",
                    element:<Predictions/>
                }
            ]
        },
       
    ]

    const routes = createBrowserRouter([
        ...routesForPublic
    ])
    return <RouterProvider router={routes} />
}

export default Routes