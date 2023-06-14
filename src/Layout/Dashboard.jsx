import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaBook,
  FaBookReader,
  FaBookmark,
  FaEdit,
  FaRegPlusSquare,
  FaUserEdit,
  FaWallet,
} from "react-icons/fa";

// import { Slide } from "react-awesome-reveal";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import { getRole } from "../API/getRole";
import { Slide } from "react-awesome-reveal";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data

  const { user, role, logOut } = useAuth();

  const [isActive, setActive] = useState("false");

  const [userRole , setUserRole] = useState("user");
  console.log("ei user role", userRole);

  useEffect(() => {
    if (user) {
      getRole(user?.email).then((data) => {
        setUserRole(data);
      });
    }
  }, [user, userRole]);


  return (
    <div>
      <div className="p-5">
        <Outlet></Outlet>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden w-68 space-y-6 px-2 py-4 absolute top-0 inset-y-0 left-0 transform bg-green-200 ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <Slide>
                  <h1 className="text-4xl font-caveat my-4">
                    Frippo Sports Academy
                  </h1>
                </Slide>

                {userRole === "admin" && (
                  <>
                    <NavLink
                      to="/dashboard/allusers"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30 " : "text-gray"
                        }`
                      }
                    >
                      <FaUserEdit className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">Manage Users</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/manageclasses"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaEdit className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">Manage Classes</span>
                    </NavLink>
                  </>
                )}

                {userRole == "user" && (
                  <>
                    <NavLink
                      to="/dashboard/myselectedclass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaBook className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">
                        My Selected Classes
                      </span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/myenrolledclass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaBookmark className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">
                        My Enrolled Classes
                      </span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/paymenthistory"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaWallet className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">Payment History</span>
                    </NavLink>
                  </>
                )}

                
                {userRole === "" && (
                  <>
                    <NavLink
                      to="/dashboard/myselectedclass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaBook className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">
                        My Selected Classes
                      </span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/myenrolledclass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaBookmark className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">
                        My Enrolled Classes
                      </span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/paymenthistory"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaWallet className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">Payment History</span>
                    </NavLink>
                  </>
                )}

                {userRole === "instructor" && (
                  <>
                    <NavLink
                      to="/dashboard/myClass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaBookReader className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">My Classes</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/addClass"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${
                          isActive ? "bg-info/30" : "text-gray"
                        }`
                      }
                    >
                      <FaRegPlusSquare className="w-5 h-5" />{" "}
                      <span className="mx-4 font-medium">Add Class</span>
                    </NavLink>
                  </>
                )}
              </nav>
            </div>
            <div className="divider"></div>
          <div className="btm-nav mb-2">
            <button className="active bg-pink-200 text-pink-600">
              <span className="btm-nav-label">
                {" "}
                <NavLink to="/"> Home</NavLink>{" "}
              </span>
            </button>

            <button className="active bg-neutral text-neutral-content">
              <span className="btm-nav-label">
                <NavLink to="/instructors">Instructors</NavLink>
              </span>
            </button>

            <button className="active bg-teal-200 text-teal-600">
              <span className="btm-nav-label">
                {" "}
                <NavLink to="/approved-classes">Classes</NavLink>
              </span>
            </button>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
