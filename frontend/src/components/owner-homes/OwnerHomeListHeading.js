import React from "react";

function OwnerHomeListHeading() {
  return (
    <div>
      <p className="lead text-left">
        <i>
          These are the services you have added and are available for travellers
          to book
        </i>
      </p>
      <br />
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10 text-left">
              <strong>Service Name</strong>
            </div>
          </div>
        </div>
        <div className="col-2 text-center">
          <strong>Guest Capacity</strong>
        </div>
        <div className="col-2 text-center">
          <strong>City</strong>
        </div>

        {/* <div className="col-2 text-center">
          <strong>Area</strong>
        </div> */}
        <div className="col-2 text-center">
          <strong>Price</strong>
        </div>
        <div className="col-1"></div>
      </div>
      <br />
    </div>
  );
}

export default OwnerHomeListHeading;
