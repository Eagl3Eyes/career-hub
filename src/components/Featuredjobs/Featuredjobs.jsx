import { useState } from 'react';
import FeaturedjobsCard from '../FeaturedjobsCard/FeaturedjobsCard';
import { useLoaderData } from 'react-router-dom';

const Featuredjobs = () => {
    const data = useLoaderData();
    const [sliceData, setSliceData] = useState(4);
    return (
        <div>
            <div className='text-center mt-16 mb-8'>
                <h1 className='font-bold text-4xl'>Featured Jobs</h1>
                <p className='py-5 text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Featured Card data will come here */}
            <div className='md:w-[80%] md:mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-3 py-5'>
                {
                    data.slice(0, sliceData == 4 ? sliceData : 6).map(featurejob =>
                        <FeaturedjobsCard
                            key={featurejob.id}
                            featurejob={featurejob}
                        />)
                }
            </div>
            <div className='text-center my-3'>
                {
                    sliceData == 4 ?
                        <><button onClick={() => setSliceData(6)} className='px-9 py-3 rounded text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500'>See All Jobs</button></>
                        :
                        <></>
                }

            </div>
        </div>
    );
}

export default Featuredjobs;
