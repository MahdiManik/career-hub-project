

const Home = () => {
    return (
        <>
            <section>
                <div className="bg-cover rounded-lg" style={{ backgroundImage: 'url("../../../public/assets/images/bg2.png")' }}>
                    <div className="hero py-12">
                        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                            <img src="../../../public/assets/images/user.png" className=" max-w-sm rounded-lg shadow-xl" />
                            <div>
                                <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h1>
                                <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                                <button className="btn btn-primary bg-blue-500 border-0">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="my-32 ">
                    <h3 className="text-5xl text-center font-bold">Job Category List</h3>
                    <div className="flex items-center justify-between">
                        <div className=" mt-12 bg-gray-100 p-6 rounded-lg">
                            <img className="py-6" src="../../../public/assets/icons/accounts.png" alt="icon" />
                            <h5 className="text-xl font-semibold">Account & Finance</h5>
                            <p className="text-gray-600">300 Jobs Available</p>
                        </div>
                        <div className=" mt-12 bg-gray-100 p-6 rounded-lg">
                            <img className="py-6" src="../../../public/assets/icons/accounts.png" alt="icon" />
                            <h5 className="text-xl font-semibold">Account & Finance</h5>
                            <p className="text-gray-600">300 Jobs Available</p>
                        </div>
                        <div className=" mt-12 bg-gray-100 p-6 rounded-lg">
                            <img className="py-6" src="../../../public/assets/icons/accounts.png" alt="icon" />
                            <h5 className="text-xl font-semibold">Account & Finance</h5>
                            <p className="text-gray-600">300 Jobs Available</p>
                        </div>
                        <div className=" mt-12 bg-gray-100 p-6 rounded-lg">
                            <img className="py-6" src="../../../public/assets/icons/accounts.png" alt="icon" />
                            <h5 className="text-xl font-semibold">Account & Finance</h5>
                            <p className="text-gray-600">300 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="my-32 ">
                    <h3 className="text-5xl text-center font-bold">Featured Jobs</h3>
                    <p className="pt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className="flex flex-col items-center justify-start ">

                        <div className="flex justify-center items-center gap-6">

                            <div className="flex flex-col justify-center gap-4 items-start mt-12 border-2 border-blue-200 p-6 rounded-lg">
                                <img className="" src="../../../public/assets/logo/netflix.png" alt="icon" />
                                <h5 className="text-xl font-semibold">Senior Product Designer</h5>
                                <p className="text-gray-600">Netflix</p>
                                <div className="card-actions justify-starts gap-4">
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Onsite</button>
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Full Time</button>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="#757575"  />
                                                <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button className="px-7 py-2 rounded-md btn-primary bg-blue-500 font-semibold text-white">View Details</button>
                            </div>

                            <div className="flex flex-col justify-center gap-4 items-start mt-12 border-2 border-blue-200 p-6 rounded-lg">
                                <img className="" src="../../../public/assets/logo/netflix.png" alt="icon" />
                                <h5 className="text-xl font-semibold">Senior Product Designer</h5>
                                <p className="text-gray-600">Netflix</p>
                                <div className="card-actions justify-starts gap-4">
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Onsite</button>
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Full Time</button>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="#757575"  />
                                                <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#757575" />
                                            </svg>
                                        </p>
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button className="px-7 py-2 rounded-md btn-primary bg-blue-500 font-semibold text-white">View Details</button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-6">


                            <div className="flex flex-col justify-center gap-4 items-start mt-12 border-2 border-blue-200 p-6 rounded-lg">
                                <img className="" src="../../../public/assets/logo/netflix.png" alt="icon" />
                                <h5 className="text-xl font-semibold">Senior Product Designer</h5>
                                <p className="text-gray-600">Netflix</p>
                                <div className="card-actions justify-starts gap-4">
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Onsite</button>
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Full Time</button>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="#757575" />
                                                <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button className="px-7 py-2 rounded-md btn-primary bg-blue-500 font-semibold text-white">View Details</button>
                            </div>


                            <div className="flex flex-col justify-center gap-4 items-start mt-12 border-2 border-blue-200 p-6 rounded-lg">
                                <img className="" src="../../../public/assets/logo/netflix.png" alt="icon" />
                                <h5 className="text-xl font-semibold">Senior Product Designer</h5>
                                <p className="text-gray-600">Netflix</p>
                                <div className="card-actions justify-starts gap-4">
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Onsite</button>
                                    <button className="px-6 py-1 border-2 border-blue-300 shadow-2xl rounded-md font-semibold text-blue-600">Full Time</button>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z" stroke="#757575"  />
                                                <path d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z" stroke="#757575"  />
                                            </svg>
                                        </p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#757575" />
                                            </svg>
                                        </p>
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button className="px-7 py-2 rounded-md btn-primary bg-blue-500 font-semibold text-white">View Details</button>
                            </div>


                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="px-7 py-2 mt-12 text-center rounded-md btn-primary bg-blue-500 font-semibold text-white">View Details</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;