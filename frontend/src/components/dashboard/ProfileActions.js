import React from "react";
import { Link } from "react-router-dom";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaUserCircle,
  FaShoppingCart
} from "react-icons/fa";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
    
      <Link to="/edit-profile" className="btn btn-light" style={{backgroundColor: "red" , "height" : "200px", "width" : "200px"}}>
   
    <FaUserCircle></FaUserCircle> <h2>Edit Profile</h2>
       
      </Link>

      <Link to="/homes" className="btn btn-light" style={{backgroundColor: "blue"}}>
       
        <FaHome></FaHome> <h3>Book New Home</h3>
      </Link>
      <Link to="/helicopters" className="btn btn-light" style={{backgroundColor: "green"}}>
       
        <FaHelicopter></FaHelicopter> <h3>Book Helicopter Ride</h3>
      </Link>
      <Link to="/farms" className="btn btn-light" style={{backgroundColor: "violet"}}>
       
        <FaTree></FaTree> <h3>Book Farm Visit</h3>
      </Link>
      <Link to="/booked-homes" className="btn btn-light" style={{backgroundColor: "yellow"}}>
       <FaShoppingCart></FaShoppingCart> <h3>Your Bookings</h3>
      </Link>
    </div>
  );
};

export default ProfileActions;
