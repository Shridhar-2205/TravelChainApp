import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addHomes } from "../../actions/profileActions";

class AddHelicopter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseName: "",
      houseLocation: "",
      houseAvailableFrom: "",
      houseAvailableTill: "",
      guestCapacity: "",
      houseArea: "",
      houseImage: "",
      houseDescription: "",
      housePrice: "",
      houseAddedBy: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const homeData = {
      houseName: this.state.houseName,
      houseLocation: this.state.houseLocation,
      houseAvailableFrom: this.state.houseAvailableFrom,
      houseAvailableTill: this.state.houseAvailableTill,
      guestCapacity: this.state.guestCapacity,
      houseArea: this.state.houseArea,
      houseImage: this.state.houseImage,
      houseDescription: this.state.houseDescription,
      housePrice: this.state.housePrice,
      houseAddedBy: this.state.houseAddedBy
    };

    this.props.addHomes(homeData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-homes">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <Link to="/owner-homes" className="btn btn-light">
                Go Back
              </Link>
              <h2 className="display-8 text-center">Add Helicopter</h2>
              <p className="lead text-center">
                Add the Helicopter you want to make available for Traveller
              </p>

              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Helicopter Name"
                  name="houseName"
                  value={this.state.houseName}
                  onChange={this.onChange}
                  error={errors.houseName}
                />
                <TextFieldGroup
                  placeholder="Helicopter Location or City Name"
                  name="houseLocation"
                  value={this.state.houseLocation}
                  onChange={this.onChange}
                  error={errors.houseLocation}
                />
                <TextFieldGroup
                  type="number"
                  min="1"
                  placeholder="Helicopter Guest Capacity"
                  name="guestCapacity"
                  value={this.state.guestCapacity}
                  onChange={this.onChange}
                  error={errors.guestCapacity}
                />
                <h6>Helicopter Available From Date</h6>
                <TextFieldGroup
                  name="houseAvailableFrom"
                  type="date"
                  value={this.state.houseAvailableFrom}
                  onChange={this.onChange}
                  error={errors.houseAvailableFrom}
                />
                <h6>Helicopter Available Till Date</h6>
                <TextFieldGroup
                  name="houseAvailableTill"
                  type="date"
                  value={this.state.houseAvailableTill}
                  onChange={this.onChange}
                  error={errors.houseAvailableTill}
                />

                <TextFieldGroup
                  type="number"
                  placeholder="Helicopter Price"
                  name="housePrice"
                  value={this.state.housePrice}
                  onChange={this.onChange}
                  error={errors.housePrice}
                  info="Helicopter Price must be per Night in USD"
                />

                <TextFieldGroup
                  type="number"
                  placeholder="Helicopter Area"
                  name="houseArea"
                  value={this.state.houseArea}
                  onChange={this.onChange}
                  error={errors.houseArea}
                  info="Helicopter Area must in Square feet"
                />

                <TextFieldGroup
                  placeholder="Helicopter Image Url"
                  name="houseImage"
                  value={this.state.houseImage}
                  onChange={this.onChange}
                  error={errors.houseImage}
                  info="Helicopter Image field should be an image URL"
                />

                <TextAreaFieldGroup
                  placeholder="Helicopter Description"
                  name="houseDescription"
                  value={this.state.houseDescription}
                  onChange={this.onChange}
                  error={errors.houseDescription}
                  info="Tell us about your Helicopter"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddHelicopter.propTypes = {
  addHomes: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addHomes })(
  withRouter(AddHelicopter)
);
