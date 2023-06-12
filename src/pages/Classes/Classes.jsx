import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
import { postSelectedClasses } from "../../API/addClass/addClass";

const Classes = () => {


  
const [approvedClasses, setApprovedClasses] = useState([]);
const {user} = useAuth()
const navigate = useNavigate()




  useEffect(() => {
    fetch("http://localhost:5000/approved-classes")
      .then((res) => res.json())
      .then((data) => {
        setApprovedClasses(data);
      });
  }, []);


  const handleSelected = (classItem) => {
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "You need to login first",
            text: "Please login first",

        });
        navigate('/login')
        return;
    }
    const userEmail = user.email;
    classItem.userEmail = userEmail;
    classItem.userName = user.displayName;
    classItem.classId = classItem._id;
    delete classItem._id;
    postSelectedClasses(classItem)
        
        .then((data) => {
            if(data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Class selected ",
                });
            }
                    
        });

}


  

  return (
    <div className="py-[133px]">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-16">
        {approvedClasses.map((classItem) => (
        
        <div
            key={classItem._id}
            className={`card lg:card-side shadow-xl mt-1 mx-24`}
          >
             
              <img
                className="w-1/2 h-full" 
                src={classItem.image}
                alt="Class"
              />
           
           
            <div className={`card-body ${
              classItem.availableSeats === 0 ? "bg-red-600" : "bg-red-50"
            }`}>
              <h2 className="card-title text-xl font-serif text-blue-950">
                {classItem.name}
              </h2>
              <p className="text-sm font-semibold">
                Instructor: {classItem.instructor}
              </p>
              <p>Available Seats: {classItem.availableSeats}</p>
              <p>Price: ${classItem.price}</p>
              <div className="card-actions justify-start">
                {classItem.availableSeats === 0 ? (
                  <button className="btn" disabled>
                    Select
                  </button>
                ) : (
                  <button onClick={()=>handleSelected(classItem)}  className="btn btn-primary">Select</button>
                )}
              </div>
           
            </div>
          </div>
        )
        
        )}
      </div>
    </div>
  );
};

export default Classes;
