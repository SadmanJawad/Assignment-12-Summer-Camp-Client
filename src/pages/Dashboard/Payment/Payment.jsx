import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSelectedClassById } from '../../../API/addClass/addClass';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchClassData = async () => {
            try {
                const classData = await fetchSelectedClassById(id);
                setData(classData);
            } catch (error) {
                console.error('Error fetching selected class:', error);
            }
        };

        fetchClassData();
    }, [id]);

    const price = data.price;
    const enrolledClass = data;

    return (
        <div>
        
            <div className='text-center'>
                <h3 className='text-2xl '>Pay To enroll in Class <br /> <span className='text-3xl font-bold'> {data.name}</span></h3>
                <h3 className='text-xl mt-20'>Please Pay: ${data.price}</h3>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} enrolledClass={enrolledClass} />
            </Elements>

        </div>
    );
};

export default Payment;
