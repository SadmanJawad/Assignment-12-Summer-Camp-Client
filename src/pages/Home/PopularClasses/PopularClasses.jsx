import { useEffect, useState } from 'react';
import SingleClass from './SingleClass';


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect( () => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const popularClasses = data.filter( cls => cls.numberOfStudents === '10')
            setClasses(popularClasses)})
    }, [])


    return (
       <>
       <div className="font-caveat text-4xl text-center">
        Popular Classes
      </div>
      <div>
      {
              classes.map( cls => <SingleClass
                 key={cls._id}
                  cls={cls}
              ></SingleClass>) 
       }
      </div>
        
       </>
    );
};

export default PopularClasses;