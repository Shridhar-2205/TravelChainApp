import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HomeItem from "./HomeItem";
import { getHomes } from "../../actions/homeActions";

class Homes extends Component {
  componentDidMount() {
    this.props.getHomes();
  }

  render() {
    const { allhomes, loading } = this.props.home;
    let homeItems;
    let temp = [];

    if (allhomes === null || loading) {
      homeItems = (
        <h4 className="text-center">
          No helicopters have been added by the any of the home owners so far
        </h4>
      );
    } else {
      if (allhomes.length > 0) {
        console.log(allhomes[0].houseName);
        let i = 0;
        for (i = 0; i < allhomes.length; i++) {
          if (allhomes[i].houseName.substring(0, 4) == "Heli") {
            temp.push(allhomes[i]);
          }
        }
        homeItems = temp.map(home => <HomeItem key={home._id} home={home} />);
      } else {
        homeItems = (
          <h4 className="text-center">
            No helicopters have been added by the any of the home owners so far
          </h4>
        );
      }
    }

    return (
      <div className="homes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <h2 className="display-8 text-center">
                    Helicopters Available
                  </h2>
                </div>

                <div className="col-2">
                  <Link to="/dashboard" className="btn btn-light">
                    Back to dashboard
                  </Link>
                </div>
              </div>
              <p className="lead text-center">
                <i>
                  Find the best helicopters around the Country for affordable
                  prices
                </i>
              </p>
              {homeItems}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/dashboard" className="btn btn-light float-right">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Homes.propTypes = {
  getHomes: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, { getHomes })(Homes);
