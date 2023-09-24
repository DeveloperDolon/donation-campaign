
import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Componentes/Home/Home";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <h1>Hello world from donation.</h1>
            },
            {
                path: "/statistics",
                element: <h1>Hello world from statistics</h1>
            }
        ],
    }
])

export default MainRoute;