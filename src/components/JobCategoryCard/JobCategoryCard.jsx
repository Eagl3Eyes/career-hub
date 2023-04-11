import React from 'react';
const JobCategoryCard = ({ category }) => {
    const { jobCategoryName, totalJobAvailable, imageLink } = category;
    return (
        <div className='border-2 p-4 rounded bg-indigo-50'>
            <img src={imageLink} alt='' />
            <h3 className='font-bold my-2 text-slate-700'>{jobCategoryName}</h3>
            <p className='text-slate-400'>{totalJobAvailable} Jobs Available</p>
        </div>
    );
}

export default JobCategoryCard;
