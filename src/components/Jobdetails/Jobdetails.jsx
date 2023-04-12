import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../fakedb';
import Dollar from '../../assets/Icons/Frame.png';
import JobTitle from '../../assets/Icons/Frame-1.png';
import Phone from '../../assets/Icons/Frame-2.png';
import Email from '../../assets/Icons/Frame-3.png';
import Location from '../../assets/Icons/Frame-4.png';


const Jobdetails = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const job = data.find(item => item.id === id);
                setSingleData(job);
            });
    }, [id]);

    const storeToDb = (id)=>{
        addToDb(id);
        toast("Applied Successfully")
    }

    return (
        <div className='md:w-[80%] md:mx-auto px-5 p-5'>
            <h2 className='text-3xl font-bold text-center py-5'>Job Details</h2>
            {singleData ? (
                <div className=' grid grid-cols-1 md:grid-cols-3 justify-between gap-5 '>
                    <div className='col-span-2'>
                        <p className='py-3'>
                            <span className='font-bold'>Job Description:</span> <br /> <span className='text-slate-500'>{singleData.description}</span>
                        </p>
                        <p>
                            <span className='font-bold'>Job Responsibility:</span> <br /> <span className='text-slate-500'>{singleData.responsibility}</span>
                        </p>
                        <p className='py-3'>
                            <span className='font-bold'>Educational Requirements:</span> <br /> <span className='text-slate-500'>{singleData.education}</span>
                        </p>
                        <p>
                            <span className='font-bold'>Experiences:</span> <br /> <span className='text-slate-500'>{singleData.experience}</span>
                        </p>

                    </div>

                    <div>
                        <div className='border-2 p-4 bg-blue-100 rounded-md'>
                            <h2 className='mb-3 font-bold'>Job Details</h2>
                            <hr className='border-x-2 border-blue-300 mb-4' />

                            <div className='flex gap-1'>
                                <img className='w-6 h-6' src={Dollar} alt="" />
                                <h3><span className='font-semibold'>Salary:</span> <span className='text-slate-500'>{singleData.salary}</span> </h3>
                            </div>

                            <div className='flex gap-1'>
                                <img className='w-6 h-6' src={JobTitle} alt="" />
                                <h3 className='mb-4'><span className='font-semibold'>Job Title:</span> <span className='text-slate-500'>{singleData.title}</span> </h3>
                            </div>
                            

                            <h2 className='mb-2 font-bold'>Contact Information</h2>
                            <hr className='border-x-2 border-blue-300 mb-4' />

                            <div className='flex gap-1'>
                                <img className='w-6 h-6' src={Phone} alt="" />
                                <h3><span className='font-semibold'>Phone:</span> <span className='text-slate-500'>{singleData.phone}</span> </h3>
                            </div>

                            <div className='flex gap-1'>
                                <img className='w-6 h-6' src={Email} alt="" />
                                <h3><span className='font-semibold'>Email:</span> <span className='text-slate-500'>{singleData.email}</span> </h3>
                            </div>
                            
                            <div className='flex gap-1'>
                                <img className='w-6 h-6' src={Location} alt="" />
                                <h3><span className='font-semibold'>Address:</span> <span className='text-slate-500'>{singleData.location}</span> </h3>
                            </div>
                        </div>
                        <div>
                        <button onClick={()=>storeToDb(singleData.id)} className='px-4 py-3 rounded-md text-white font-semibold text-sm w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500'>Apply Now</button>
                        </div>
                    </div>
                    {/* Add other fields as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <ToastContainer />
        </div>
    );
}

export default Jobdetails;
