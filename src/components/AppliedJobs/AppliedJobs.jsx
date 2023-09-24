import { ImLocation2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
    ;
const AppliedJobs = ({ job }) => {
    const { logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary,} = job;
    return (
        <>

            <div className="">

                <div className="flex flex-col items-center justify-start ">

                    <div className="flex justify-center items-center gap-6">

                        <div className="flex flex-col justify-center items-start mt-12 w-96 h-80 gap-4 border-2 border-blue-200 p-6 rounded-lg">
                            <img className="" src={logo} alt="icon" />
                            <h5 className="text-xl font-semibold">{job_title}</h5>
                            <p className="text-gray-600">{company_name}</p>
                            <div className="card-actions justify-starts gap-4">
                                <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">{remote_or_onsite}</button>
                                <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">{job_type}</button>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <ImLocation2></ImLocation2>
                                    </p>
                                    <p>{location}</p>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <p>
                                        <AiFillDollarCircle></AiFillDollarCircle>
                                    </p>
                                    <p>Salary: {salary}</p>
                                </div>
                            </div>


                            <Link to={`./job/${id}`} >
                                <button
                                    className="py-2 px-6 rounded-md  bg-blue-500 font-semibold 
                                     text-white">
                                        Job Details 
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};


AppliedJobs.propTypes = {
    job: PropTypes.object
};

export default AppliedJobs;