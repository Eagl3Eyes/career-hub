import Location from '../../assets/Icons/Location Icon.png';
import Dollar from '../../assets/Icons/Frame.png';
import { Link } from 'react-router-dom';

const FeaturedjobsCard = ({ featurejob}) => {
    const { id,title, image, company, type, salary, location } = featurejob;
    
    return (
        <div>
            <div className='border-2 rounded-md p-4 h-full'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='py-2'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <p className='text-slate-400'>{company}</p>
                </div>
                <div className='flex gap-3 text-blue-600 font-semibold'>
                    <div className='border-2 rounded-md p-2 border-blue-300'>{type.remote}</div>
                    <div className='border-2 rounded-md p-2 border-blue-300'>{type.fullTime}</div>
                </div>
                <div className='py-2 flex gap-3'>
                    <div className='flex gap-1'>
                        <img src={Location} alt="" />
                        <p className='text-slate-400'>{location}</p>
                    </div>
                    <div className='flex gap-1'>
                        <img src={Dollar} alt="" />
                        <p className='text-slate-400'>Salary: {salary}</p>
                    </div>
                </div>
                <div className='py-2'>
                    <Link to={`/jobdetails/${id}`} className='px-4 py-3 rounded text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500'>View Details</Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedjobsCard;
