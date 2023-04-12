import React from 'react';
// import './HeadCover.css';
import ProfessionalImg from '../../assets/images/P3OLGJ1 copy 1.png';

const HeadCover = () => {
    return (
        <div className='bg-indigo-50'>
            <div className='md:w-[80%] md:mx-auto px-5 md:flex justify-center items-center'>
                <div>
                    <h1 className=' text-4xl text-center lg:text-left lg:text-6xl font-bold lg:leading-normal'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h1>
                    <p className='text-lg text-justify my-4 lg:mt-4 text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='px-4 py-3 rounded text-white text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-500'>Get Started</button>
                </div>
                <div>
                    <img src={ProfessionalImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeadCover;
