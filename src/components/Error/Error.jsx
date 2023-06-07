import Lottie from 'lottie-react';
import error from '../../../src/assets/error.json'

const Error = () => {
    return (
        <div style={{width: "50%"}} className='mx-auto mt-32'>
            <Lottie loop={true} animationData={error} />
        </div>
    );
};

export default Error;