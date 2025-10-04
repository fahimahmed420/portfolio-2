import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import GlassCursor from '../Components/ui/GlassCursor';

const MainLayout = () => {
    return (
        <>
        <GlassCursor/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default MainLayout;