import { NavLink } from "react-router-dom";

const Header = () => {


    const links = <>
        <div className='text-base font-semibold'>
            <NavLink className="hover:text-blue-600 mr-6" to={'/'}>Home</NavLink>
            <NavLink className="hover:text-blue-600 mr-6" to={'/statistics'}>Statistics</NavLink>
            <NavLink className="hover:text-blue-600 mr-6" to={'/appliedJobs'}>Applied Jobs</NavLink>
            <NavLink className="hover:text-blue-600 mr-6" to={'/blog'}>Blog</NavLink>
            <NavLink className="hover:text-blue-600 mr-6" to={'/job'}>Job</NavLink>
            
        </div>
    </>

    return (
        <>

            <div className="pt-8">
                <div className="navbar bg-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 text-white rounded-box w-60">
                                {links}
                            </ul>
                        </div>
                        <p className="font-semibold normal-case text-xl">Career Hub</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn-primary border-0 btn bg-blue-500">Star Applying</a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;