

import AppliedJobs from '../AppliedJobs/AppliedJobs';
import { useEffect, useState } from 'react';



const Products = () => {
    const [jobs, setJobs] = useState([])


    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className='mt-32'>
                <h3 className="text-5xl text-center font-bold">Featured Jobs</h3>
                <p className="pt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-2 mb-8'>
                {jobs?.slice(0, dataLength).map(job => <AppliedJobs
                    key={job.id} job={job}></AppliedJobs>)}
            </div>
            <div className='mb-28 flex justify-center items-center'>
                <button onClick={()=> setDataLength(jobs.length)}
                className={`px-7 py-2 rounded-md btn-primary bg-blue-500 font-semibold text-white ${jobs.length === dataLength && 'hidden'}`}>See All Jobs</button>
            </div>
        </div>
    );
};



export default Products;