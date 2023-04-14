import React from 'react';
import Header from '../SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;