import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaUsers } from "react-icons/fa";

import { Slide } from "react-awesome-reveal";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data
 
  const isAdmin = true;

  const isInstructor = true;

  const isStudent = true;


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-20 h-full bg-base-200 text-base-content table table-pin-rows">
          {
            isAdmin ? (
              <>
                <Slide>
                  <h1 className="text-4xl font-caveat my-4">
                    Frippo Sports Academy
                  </h1>
                </Slide>
              
                  <h1>Admin Dashboard</h1>
                <li>
                  <NavLink to="/dashboard/manageclasses">
                    {" "}
                    <FaBars></FaBars> Manage Classes
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/allusers">
                    {" "}
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : 
                <></>

          }

{
            isInstructor ?   
            (
              <>
                <Slide>
                  <h1 className="text-4xl font-caveat my-4">
                    Frippo Sports Academy
                  </h1>
                </Slide>
<h1>Instructor Dashboard</h1>
                <li>
                  <NavLink to="/dashboard/addClass">
                    Add a class
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/myClass">
                    My Classes
                  </NavLink>
                </li>

              </>
            ) :
              <></>
} 
{
            isStudent ?
            (
              <>
                 <Slide>
                  <h1 className="text-4xl font-caveat my-4">
                    Frippo Sports Academy
                  </h1>
                </Slide>
<h1>Student Dashboard</h1>
                <li>
                  <NavLink to="/dashboard/myselectedclass">
                    My Selected Class
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/myenrolledclass">
                    My Enrolled Classes
                  </NavLink>
                </li>

              </>
            ) :
              <></>
}

            <div className="divider"></div>
            <li>
              <NavLink to="/"> Home</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/approved-classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
