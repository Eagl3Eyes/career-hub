import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className='bg-indigo-50'>
            <div className="navbar md:w-[80%] md:mx-auto px-5 bg-indigo-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="lg:hidden">
                            <Bars3Icon className=" h-6 w-6" />
                        </label>
                        <ul tabIndex="0" className="menu-compact dropdown-content mt-3 p-2 bg-yellow-100 rounded-box w-52">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className='mx-auto lg:mx-0 text-lg font-bold lg:text-3xl'>
                        <Link to="">Job Hunter</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-5">
                        <li className='m-3 lg:m-0 font-bold hover:text-purple-700'><Link to="">Home</Link></li>
                        <li className='m-3 lg:m-0 font-bold hover:text-purple-700'><Link to="/statistics">Statistics</Link></li>
                        <li className='m-3 lg:m-0 font-bold hover:text-purple-700'><Link to="/appliedjobs">Applied Jobs</Link></li>
                        <li className='m-3 lg:m-0 font-bold hover:text-purple-700'><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='px-4 py-3 text-sm rounded text-white bg-gradient-to-r from-blue-500 to-purple-500'>Apply Now</button>
                </div>
            </div>
        </div>

    );
}

export default Header;
