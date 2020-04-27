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
    <div>
      <div>
        <Link to="/edit-profile" className="btn btn-light">
          <i className="text-info mr-1" /> <FaUserCircle></FaUserCircle> Edit
          Profile
        </Link>
      </div>
      <br/>
      <div>
        <Link to="/homes" className="btn btn-light">
          <i className="text-info mr-1" />
          <FaHome></FaHome> Book New Home
        </Link>
      </div>
      <br />
      <div>
      <Link to="/helicopters" className="btn btn-light">
          <i className=" text-info mr-1" />
          <FaHelicopter></FaHelicopter> Book Helicopter Ride
        </Link>
      </div>
      <br />
      <div >
      <Link to="/farms" className="btn btn-light">
          <i className="text-info mr-1" />
          <FaTree></FaTree> Book Farm Visit
        </Link>
      </div>
      <br />
      <div>
        
      <Link to="/booked-homes" className="btn btn-light">
          <i className="text-info mr-1" /> <FaShoppingCart></FaShoppingCart> Your
          Bookings
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
