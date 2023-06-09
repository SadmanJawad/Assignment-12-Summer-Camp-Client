import { useEffect, useState } from "react";

const Classes = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/approved-classes")
      .then((res) => res.json())
      .then((data) => {
        setApprovedClasses(data);
      });
  }, []);

  return (
    <div className="py-[133px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {approvedClasses.map((classItem) => (
        
        <div
            key={classItem._id}
            className={`card lg:card-side shadow-xl mt-1 mx-24`}
          >
             
              <img
                className="w-full h-full" 
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
                  <button className="btn btn-primary">Select</button>
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
