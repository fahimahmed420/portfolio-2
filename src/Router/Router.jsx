import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Experience from "../Pages/Experience";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutMe },
            { path: "experience", Component:Experience },
            { path: "skills", Component: Skills },
            { path: "projects", Component: Projects },
            { path: "contact", Component: ContactMe },
        ],
    },

]);

export default router;