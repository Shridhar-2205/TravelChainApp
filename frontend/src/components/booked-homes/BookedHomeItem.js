import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  FaHelicopter,
  FaTree,
  FaHome,
  FaUserCircle,
  FaShoppingCart
} from "react-icons/fa";

class BookedHomeItem extends Component {
  render() {
    const { ownerhome } = this.props;
    // let price;
    let icon;
    if (ownerhome.houseName.substring(0, 4) == "Home") {
      // price = <p>${ownerhome.housePrice} / night</p>;
      icon = <FaHome></FaHome>;
    } else if (ownerhome.houseName.substring(0, 4) == "Heli") {
      // price = <p>${ownerhome.housePrice} / ride</p>;
      icon = <FaHelicopter></FaHelicopter>;
    } else if (ownerhome.houseName.substring(0, 4) == "Farm") {
      // price = <p>${ownerhome.housePrice} / visit</p>;
      icon = <FaTree></FaTree>;
    }

    return (
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-2">
              {/* <i className="fas fa-globe text-info mr-1" /> */}
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

        <div className="col-2 text-center">
          <p>
            $
            {parseFloat(
              Math.round(
                (ownerhome.housePrice +
                  Number(ownerhome.housePrice) * 0.1 +
                  50) *
                  100
              ) / 100
            ).toFixed(2)}{" "}
            <small>
              <i>inc. taxes</i>
            </small>
          </p>
        </div>
        <div className="col-2 text-center">
          <Moment format="MMM DD, YYYY">
            <p>{ownerhome.houseBookedDate}</p>
          </Moment>
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

BookedHomeItem.propTypes = {
  ownerhome: PropTypes.object.isRequired
};

export default BookedHomeItem;
