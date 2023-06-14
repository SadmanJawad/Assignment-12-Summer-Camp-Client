
const SinglePopularInstrucors = ({ins}) => {
    const { name, photoURL, } = ins;



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <img className="w-44 h-44"  src={photoURL} alt=""/>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">Number of Students: 0</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SinglePopularInstrucors;