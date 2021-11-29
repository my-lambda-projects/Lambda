import React from "react";

const TotalDisplay = (props) => {
  const { value } = props;

  return (
    <div className="row">
      <div className="col-md-12 p-0">
        <div className="form-group">
          <textarea
            className="form-control"
            readOnly
            value={value}
            rows="1"
            id="total"
            type="text"
            name="ans"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TotalDisplay;
