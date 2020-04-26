import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IndHomeItem extends Component {
  onbookHomeClick(home) {
    //this.props.bookThisHome(home);
    axios.post("http://3.23.89.106:3001/bookhome", home).then(function(res) {
      if (res.data) {
        alert("Your Booking Successful");
     window.location = 'http://3.23.89.106:5000/blocks/new/?x='+home._id+'&text='+home.houseOwnerName+'&home='+home.houseName;
      }
    });
  }

  render() {
    const { homes } = this.props;
    let price = homes.housePrice;
    let tax = Number((Math.ceil(Number(price * 0.1) * 100) / 100).toFixed(2));
    let total = Number(price) + Number(tax);

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-8">
            <img src={homes.houseImage} alt="" />
          </div>
          <div className="col-4 text-left">
            <div className="card card-body text-light bg-dark mb-3 text-center">
              <h4>{homes.houseName}</h4>
            </div>
            <br />
            <div className="row">
              <div className="col-6 text-left">
                <h5>Price</h5>
                <h5>Tax</h5>
                <br></br>
                <h5>Total</h5>
              </div>
              <div className="col-6 text-right">
                <h5>${price} </h5>
                <h5>${tax} </h5>
                <br></br>
                <h5>${total}</h5>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-12 text-center">
              
                <br />
                <button
                  type="submit"
                  onClick={this.onbookHomeClick.bind(this, homes)}
                  className="btn btn-success btn-lg btn-block"
                >
                  Book now
                </button>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-12 text-center">
                <Link
                  to={"/homes"}
                  className="btn btn-primary btn-lg btn-block"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-lg-8 col-md-8 text-center">
            <p>
              <i>Owned by {homes.houseOwnerName}</i>
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-3 text-center">
            <h5>
              <i className="fas fa-map-marker-alt" /> {homes.houseLocation}
            </h5>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <h5>
              <i className="fas fa-bed fa-lg" /> {homes.guestCapacity} persons
            </h5>
          </div>
          {/* <div className="col-lg-3 col-md-3 text-center">
             <h5><i className="fas fa-bath fa-lg"/> 2 bath</h5>
          </div> */}
          {/* <div className="col-lg-3 col-md-3 text-center">
            <h5><i className="fas fa-home"/> {homes.houseArea}sqft</h5>
          </div> */}
        </div>
        <br />

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <p>{homes.houseDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

IndHomeItem.propTypes = {
  bookThisHome: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps)(IndHomeItem);
