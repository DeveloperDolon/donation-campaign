
import {
    createBrowserRouter
  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Componentes/Home/Home";
import DonationItem from "../Componentes/DonationItem/DonationItem";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("/donation.json"),
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <h1>Hello world from donation.</h1>
            },
            {
                path: "/statistics",
                element: <h1>Hello world from statistics</h1>
            },
            {
                path: "/donation-item/:id",
                loader: () => fetch("/donation.json"),
                element: <DonationItem></DonationItem>
            }
        ],
    }
])

export default MainRoute;