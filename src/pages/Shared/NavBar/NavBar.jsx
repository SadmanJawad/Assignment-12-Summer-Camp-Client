import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut, role } = useContext(AuthContext);
  const admin = role === "admin";
  const instructor = role === "instructor";
  const location = useLocation()

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

    const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/approved-classes'>Classes</Link></li>
    {user && (
                <Link
                    to={
                        admin
                            ? "/dashboard/manageclasses"
                            : instructor
                                ? "/dashboard/addClass"
                                : "/dashboard/myselectedclass"
                    }
                    className={
                        location.pathname === "/dashboard/manageclasses" ||
                            location.pathname === "/dashboard/addClass" ||
                            location.pathname === "/dashboard/myselectedclass"
                            ? "active"
                            : ""
                    }
                >
                    <div className="px-1 mt-2">Dashboard</div>
                </Link>
            )}
    </>
    return (
        <>
            <div className="navbar fixed z-50 bg-opacity-30 max-w-screen-xl text-gray-50 bg-gray-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <Link to='/'><p className=" normal-case text-4xl font-caveat">Frippo</p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {
            user ? <>
          <li className="tooltip tooltip-bottom" 
          data-tip={user.displayName ?  user.displayName : 'User name unavailable'}>
               {
                user.photoURL ?   <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" /> :
                <FaUser></FaUser>
               }
               </li>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
  </div>
</div>
        </>
    );
};

export default NavBar;