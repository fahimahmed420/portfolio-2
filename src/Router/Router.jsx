import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutMe },
            { path: "contact", Component: ContactMe },
        ],
    },

]);

export default router;