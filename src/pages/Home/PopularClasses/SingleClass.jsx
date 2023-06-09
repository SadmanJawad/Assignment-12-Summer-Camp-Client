import './PopularClasses.css'




const SingleClass = ({ cls }) => {

    const { name, image, price, availableSeats, instructor,numberOfStudents } = cls;

    return (


      <div className="flex flex-col justify-center ">
	<div
		className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div className="w-full md:w-1/3 bg-white grid place-items-center">
			<img src={image} alt="tailwind logo" className="rounded-xl" />
    </div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					
					<div className="flex items-center">
					Number of students : {numberOfStudents}
					</div>
					
					<div className="bg-green-200 px-3 py-1 rounded-full text-sm font-medium text-gray-800 hidden md:block">
						$ {price}</div>
				</div>
				<h3 className="font-black text-gray-800 md:text-2xl text-xl">{name}</h3>
				<p className="md:text-lg text-gray-500 text-base"> Instructor name : {instructor}</p>
				<p className="text-base font-black text-gray-800">
        Available Seat : {availableSeats}
				</p>
			</div>
		</div>
	</div>

    );
};

export default SingleClass;