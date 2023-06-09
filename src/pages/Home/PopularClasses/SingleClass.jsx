import './PopularClasses.css'


const SingleClass = ({ cls }) => {

    const { name, image, availableSeats, instructor } = cls
    return (

//             <div>
//          <div className="card">
//   <div className="content">
//     <div className="back">
//       <div className="back-content">
       
     
//       </div>
//     </div>
//     <div className="front">
      
//       <div className="img">
//       <img src={image} alt="" />
//         <div className="circle">
//         </div>
//         <div className="circle" id="right">
//         </div>
//         <div className="circle" id="bottom">
//         </div>
//       </div>

//       <div className="front-content">
//         <small className="badge">Pasta</small>
//         <div className="description">
//           <div className="title">
//             <p className="title">
//               <strong>Spaguetti Bolognese</strong>
//             </p>
         
//           </div>
//           <p className="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    );
};

export default SingleClass;