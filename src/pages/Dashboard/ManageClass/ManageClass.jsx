import useClass from "../../../hooks/useClass";

const ManageClass = () => {
    const [classes] = useClass();

    return (
        <div className="w-full h-full">
        <h1 className="font-caveat text-3xl text-center my-3">Manage All Classes</h1>            

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Class Image & Name</th>
        <th>Instructor Name</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
{
    classes.map( cls => <tr key={cls._id}>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{cls.name}</div>
            </div>
          </div>
        </td>
        <td>
        {cls.instructor}
        </td>
        <td>{cls.availableSeats}</td>
        <td>
            ${cls.price}
        </td>
        <td className="flex">
        <button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-600">Approve</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600">Deny</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-sky-300">Feedback</button>
        </td>
      </tr> )
}
      
    </tbody>
   
    
  </table>
</div>


        </div>
    );
};

export default ManageClass;