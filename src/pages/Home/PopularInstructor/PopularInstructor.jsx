import { useEffect } from "react";
import SinglePopularInstrucors from "./SinglePopularInstrucors";
import { useState } from "react";

const PopularInstructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([])
    const [loading , setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/instructors/popular')
        .then(res => res.json())
        .then(data => {
            setPopularInstructors(data)
            setLoading(false);
        })
        }, [popularInstructors, loading])


    return (
        <>
         <div className="font-caveat text-4xl text-center">
        Popular Instructors
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
      {
              popularInstructors.map( ins => <SinglePopularInstrucors
                 key={ins._id}
              
                 ins={ins}
              ></SinglePopularInstrucors>) 
       }
      </div>   
        </>
    );
};

export default PopularInstructor;