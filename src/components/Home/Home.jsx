import Products from "../products/Products";


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


            <Products></Products>
        </>
    );
};

export default Home;