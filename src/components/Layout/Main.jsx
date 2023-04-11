import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='Main'>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
}

export default Main;
