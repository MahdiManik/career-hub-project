import { useLoaderData, useParams } from "react-router-dom";


const JobsDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);



    return (
        <>
            <h2 className="text-4xl font-bold py-24 text-center bg-local opacity-70 bg-no-repeat 
            rounded-lg" style={{ backgroundImage: 'url("../../../public/assets/images/bg1.png")' }}>
                Job Details</h2>
            <div className="py-20">
                <div className="grid md:grid-cols-4 gap-4 ">
                    <div className="border md:col-span-3 p-6 flex flex-col gap-6 rounded-lg bg-gray-200">
                        <h4 className=""><span className="text-xl font-semibold">Job Description:</span> {job.job_description}</h4>
                        <h4 className=""><span className="text-xl font-semibold">Job Responsibility:</span> {job.job_responsibility}</h4>
                        <h4 className=""><span className="text-xl font-semibold">Educational Requirements:</span> {job.educational_requirements}</h4>
                        <h4 className=""><span className="text-xl font-semibold">Experiences:</span> {job.experiences}</h4>
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col gap-4 bg-gray-200">
                        <h3 className="text-xl font-semibold border-b-2 border-black ">Job Details</h3>
                        <p><span className="text-lg font-semibold">Salary:</span> {job.salary}</p>
                        <p><span className="text-lg font-semibold">Job title:</span> {job.job_title}</p>

                        <h3 className="text-xl font-semibold border-b-2 border-black ">Contact Information</h3>
                        <p><span className="text-lg font-semibold">Phone:</span> {job.contact_information.phone}</p>
                        <p><span className="text-lg font-semibold">Email:</span> {job.contact_information.email}</p>
                        <p><span className="text-lg font-semibold">Address:</span> {job.contact_information.address}</p>
                    <button className="btn btn-primary mt-auto">Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobsDetails;