import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaUserCircle,
  FaShoppingCart,
  FaPlusSquare
} from "react-icons/fa";

class OwnerHomeItem extends Component {
  render() {
    const { ownerhome } = this.props;
    let price;
    let icon;
    if (ownerhome.houseName.substring(0, 4) == "Home") {
      price = <p>${ownerhome.housePrice} / night</p>;
      icon = <FaHome></FaHome>;
    } else if (ownerhome.houseName.substring(0, 4) == "Heli") {
      price = <p>${ownerhome.housePrice} / ride</p>;
      icon = <FaHelicopter></FaHelicopter>;
    } else if (ownerhome.houseName.substring(0, 4) == "Farm") {
      price = <p>${ownerhome.housePrice} / visit</p>;
      icon = <FaTree></FaTree>;
    }

    return (
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-2">
              {/* <i className="fas fa-home text-info mr-1" /> */}
              {icon}
            </div>
            <div className="col-10 text-left">
              <p>{ownerhome.houseName}</p>
            </div>
          </div>
        </div>
        <div className="col-2 text-center">
          <p>{ownerhome.guestCapacity} guests</p>
        </div>
        <div className="col-2 text-center">
          <p>{ownerhome.houseLocation}</p>
        </div>

        {/* <div className="col-2 text-center">
          <p>{ownerhome.houseArea}sqft</p>
        </div> */}
        <div className="col-2 text-center">{price}</div>
        <div className="col-1"></div>
      </div>
    );
  }
}

OwnerHomeItem.propTypes = {
  ownerhome: PropTypes.object.isRequired
};

export default OwnerHomeItem;
