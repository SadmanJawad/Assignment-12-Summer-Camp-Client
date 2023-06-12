import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {


  
  const [approvedClasses, setApprovedClasses] = useState([]);
const {user} = useAuth()
const navigate = useNavigate()
const location = useLocation()



  useEffect(() => {
    fetch("http://localhost:5000/approved-classes")
      .then((res) => res.json())
      .then((data) => {
        setApprovedClasses(data);
      });
  }, []);


  const handleSelect = item => {
    console.log(item);
    if(user){
      fetch('http://localhost:5000/classes/selected',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify()
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Class Selected',
            showConfirmButton: false,
            timer: 1500
        })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please Login to select a class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }

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
              classItem.availableSeats === 0 ? "bg-red-400" : "bg-red-50"
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
                  <button onClick={() => handleSelect(classItem)} className="btn btn-primary">Select</button>
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
