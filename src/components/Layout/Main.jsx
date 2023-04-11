import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='Main'>
            <Header></Header>
            <Outlet />
            {/* <Footer/> */}
        </div>
    );
}

export default Main;
