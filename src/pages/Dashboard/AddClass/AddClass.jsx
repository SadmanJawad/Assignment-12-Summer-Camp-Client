import { useForm } from 'react-hook-form';


const AddClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);

  return (
    <div className="px-10">
      <h1 className="uppercase text-4xl text-center my-3">Add a class</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="flex gap-2 my-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Class Name</span>
          </label>
          <input type="text" placeholder="Type name"
           {...register("name", {required: true, maxLength: 120})} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Class Image</span>
          </label>
          <input type="text" placeholder="Type Image Link"
           {...register("image", {required: true, maxLength: 220})} />
        </div>
        </div>
<div className="flex gap-2 my-2">
<div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input type="text" placeholder="Type Instructor name"
           {...register("instructor", {required: true, maxLength: 120})} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input type="email" placeholder="Type Instructor Email"
           {...register("email", {required: true, maxLength: 120})} />
        </div>
</div>
<div className="flex gap-2 my-2">
<div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Available Seats</span>
          </label>
          <input type="number" placeholder="Type Available Seats"
           {...register("seats", {required: true, maxLength: 120})} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input type="number" placeholder="$ Price"
           {...register("price", {required: true, maxLength: 120})} />
        </div>
</div>
<button className="btn btn-md bg-green-600 text-white">Add</button>
      </form>
    </div>
  );
};

export default AddClass;
