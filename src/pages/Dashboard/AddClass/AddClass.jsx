// import { useForm } from 'react-hook-form';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { addClass } from "../../API/class";
// import { uploadImage } from "../../API/uploadimage";
// import useAuth from "../../hooks/useAuth";
import AddClassFrom from '../../../components/AddClassForm/AddClassForm';
import { addClass } from "../../../API/addClass/addClass";
import useAuth from "../../../hooks/useAuth";
import { uploadImage } from "../../../API/uploadImage";


const AddClass = () => {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };
    // console.log(errors);

    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Class Image');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.class.value;
        const instructor = e.target.instructor.value;
        const instructorEmail = e.target.email.value;
        const price = e.target.price.value;
        const seats = e.target.seats.value;
        const availableSeats = parseInt(seats);
        const image = e.target.image.files[0];
        setUploadButtonText("uploading...");

        // image upload to imgbb
        uploadImage(image)
            .then((data) => {
                const classData = {
                    name,
                    instructor,
                    instructorEmail,
                    price,
                    availableSeats,
                    image: data.data.display_url,
                    status: 'pending',
                    numberOfStudents: 0,
                }
                // posting the room to the db
                addClass(classData)
                    .then(data => {
                        console.log(data)
                        setUploadButtonText("Uploaded");
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: true,
                            confirmButtonText:
                                '<i class="fa fa-thumbs-up"></i> Great!',
                            timer: 1500
                        })
                        navigate('/dashboard/myClass')
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false);
                    }).catch(err => {
                        console.log(err)
                        setLoading(false);
                    })
            })


    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }



  return (
//     <div className="px-10">
//       <h1 className="uppercase text-4xl text-center my-3">Add a class</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
        
//         <div className="flex gap-2 my-2">
//         <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Class Name</span>
//           </label>
//           <input type="text" placeholder="Type name"
//            {...register("name", {required: true, maxLength: 120})} />
//         </div>
//         <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Class Image</span>
//           </label>
//           <input type="text" placeholder="Type Image Link"
//            {...register("image", {required: true, maxLength: 220})} />
//         </div>
//         </div>
// <div className="flex gap-2 my-2">
// <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Instructor Name</span>
//           </label>
//           <input type="text" placeholder="Type Instructor name"
//            {...register("instructor", {required: true, maxLength: 120})} />
//         </div>
//         <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Instructor Email</span>
//           </label>
//           <input type="email" placeholder="Type Instructor Email"
//            {...register("email", {required: true, maxLength: 120})} />
//         </div>
// </div>
// <div className="flex gap-2 my-2">
// <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Available Seats</span>
//           </label>
//           <input type="number" placeholder="Type Available Seats"
//            {...register("seats", {required: true, maxLength: 120})} />
//         </div>
//         <div className="form-control w-full max-w-xs">
//           <label className="label">
//             <span className="label-text font-semibold">Price</span>
//           </label>
//           <input type="number" placeholder="$ Price"
//            {...register("price", {required: true, maxLength: 120})} />
//         </div>
// </div>
// <button className="btn btn-md bg-green-600 text-white">Add</button>
//       </form>
//     </div>


<div>
<AddClassFrom
    user={user}
    loading={loading}
    handleSubmit={handleSubmit}
    handleImageChange={handleImageChange}
    uploadButtonText={uploadButtonText}
></AddClassFrom>
</div>




  );
};

export default AddClass;
