import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../fakedb';
import Dollar from '../../assets/Icons/Frame.png';
import Location from '../../assets/Icons/Frame-4.png';




const Appliedjobs = () => {
    const [mydata, setMydata] = useState([]);
    const [newData, setNewdata] = useState([]);

    let localData = getShoppingCart();

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setMydata(data))
    }, [])

    useEffect(() => {
        const filteredData = [];
        for (const id in localData) {
            const job = mydata.find(data => data.id === id);
            if (job) {
                filteredData.push(job);
            }
        }
        setNewdata(filteredData);
    }, [localData]);

    return (
        <div className='md:w-[80%] md:mx-auto px-5 p-5 mt-5'>
            <h3 className='text-center font-bold py-5 text-3xl'>Applied Jobs</h3>

            {newData.map(data => (
                <div key={data.id}>
                    <div className='border-2 p-4 m-2 mt-4 rounded-md grid grid-cols-1 md:grid-cols-3 items-center'>

                        <div className='grid items-center justify-center'>
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold'>{data.title}</h2>
                            <h2 className='font-semibold text-slate-500'>{data.company}</h2>
                            <div className='flex gap-3 py-3'>
                                <div className='border-2 p-2 rounded-md border-blue-500 text-blue-500'>{data.type.remote}</div>
                                <div className='border-2 p-2 rounded-md border-blue-500 text-blue-500'>{data.type.fullTime}</div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex gap-1'>
                                    <img className='w-6 h-6' src={Location} alt="" /> <span className='text-slate-500'>{data.location}</span>
                                </div>
                                <div className='flex gap-1'>
                                    <img className='w-6 h-6' src={Dollar} alt="" /> <span className='text-slate-500'>{data.salary}</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid justify-end'>
                            <button className='px-4 py-3 rounded text-white text-sm w-52 mt-4 bg-gradient-to-r from-blue-500 to-purple-500'>View Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Appliedjobs;
