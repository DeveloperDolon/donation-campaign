
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            
        ]
    }
])

export default MainRoute;