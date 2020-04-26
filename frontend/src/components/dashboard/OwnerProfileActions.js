import React from "react";
import { Link } from "react-router-dom";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaListUl
} from "react-icons/fa";

const OwnerProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">

     <p>
      <center>
      <Link to="/add-homes" className="btn btn-light" style={{backgroundColor: "red"}}  >
        <FaHome></FaHome> <h5>Add Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      </Link>
      <Link to="/add-helicopters" className="btn btn-light" style={{backgroundColor: "green"}}>
        <FaHelicopter></FaHelicopter> <h5>Add Helicopter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      </Link>
      <Link to="/add-farms" className="btn btn-light" style={{backgroundColor: "yellow"}}>
        <FaTree></FaTree> <h5>Add Farm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      </Link>
      </center>
     
      </p>
      <Link to="/product-blockchain" className="btn btn-light" style={{ backgroundColor: 'grey'}}>
                 <img src={'https://pbs.twimg.com/profile_images/1030204789978804230/ciDiP1gY_400x400.jpg'} width={5000} height={150} /><h3>Product Blockchain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          </Link>
      <Link to="/payment-blockchain" className="btn btn-light" style={{ backgroundColor: 'violet'}}>
                 <img src={'https://pbs.twimg.com/profile_images/1030204789978804230/ciDiP1gY_400x400.jpg'} width={5000} height={150}/><h3>Booking Blockchain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
      </Link>
     
    </div>


  );


};

export default OwnerProfileActions;
