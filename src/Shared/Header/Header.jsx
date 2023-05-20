import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar  bg-sky-900 text-primary-content h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-20 h-16" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Toys World</a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link> </li>
                    <li> <Link to="/allToys">All Toys</Link> </li>
                    <li> <Link to="/blogs">Blogs</Link> </li>
                    {user?.email ? <>
                        <li> <Link to="/myToys">My Toys</Link> </li>
                        <li> <Link to="/addAToy">Add A Toy</Link> </li>
                        <li><button onClick={handleLogOut}>Log out</button></li>
                    </>
                        : <li> <Link to="/login">Login</Link> </li>
                    }


                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user && 
                    <div className="rounded-full tooltip tooltip-left" data-tip={user.displayName}>
                        <img  src={user.photoURL} className='rounded-full w-10' alt="toys" />
                    </div>
                }

            </div>

        </div>
    );
};

export default Header;