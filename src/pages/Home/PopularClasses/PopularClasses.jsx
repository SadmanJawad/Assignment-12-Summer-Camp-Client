import { useEffect, useState } from 'react';
import SingleClass from './SingleClass';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()



const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])

    useEffect( () => {
        fetch(`${import.meta.env.VITE_server_url}/popular-classes`)
        .then(res => res.json())
        .then(data => {
            setPopularClasses(data)
        })
        }, [])


    return (
        <>
       <div className="font-caveat text-4xl text-center">
        Popular Classes
      </div>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className='grid grid-cols-1 md:grid-cols-2 '>
      {
              popularClasses.map( cls => <SingleClass
                 key={cls._id}
                  cls={cls}
              ></SingleClass>) 
       }
      </div>
      </div>
        
       </>
    );
};

export default PopularClasses;