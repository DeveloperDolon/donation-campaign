
import {
    createBrowserRouter
  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Componentes/Home/Home";
import DonationItem from "../Componentes/DonationItem/DonationItem";
import Donations from "../Componentes/Donation/Donations";
import Statistics from "../Componentes/Statistics/Statistics";

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
                loader: () => fetch("/donation.json"),
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                loader: () => fetch("/donation.json"),
                element: <Statistics></Statistics>
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