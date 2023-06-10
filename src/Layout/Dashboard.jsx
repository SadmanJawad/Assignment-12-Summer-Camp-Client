import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaUsers , FaHouseUser} from 'react-icons/fa';


const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;


    return (
        <div>
           
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {
        isAdmin ? <>
         <h1 className="text-4xl font-caveat my-4">Frippo Sports Academy</h1>
 <li><NavLink to="/dashboard/home"><FaHouseUser></FaHouseUser> Admin Home</NavLink></li>
                            
                            <li><NavLink to="/dashboard/manageclasses"> <FaBars></FaBars> Manage Classes</NavLink></li>
                            
                            <li><NavLink to="/dashboard/allusers"> <FaUsers></FaUsers> All Users</NavLink></li>
        
        </> :
        
        <>
        {/* user er sb kichu ekhane jabe */}
        </>
      }

                    <div className="divider"></div>
                    <li><NavLink to="/"> Home</NavLink> </li>
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li><NavLink to="/approved-classes">Classes</NavLink></li>

    </ul>
  
  </div>
</div>            
        </div>
    );
};

export default Dashboard;