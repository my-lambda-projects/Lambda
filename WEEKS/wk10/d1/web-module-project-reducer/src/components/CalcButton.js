import React from "react";

const CalcButton = (props) => {
  const { value, onClick = () => {}, size = 4 } = props;

  return (
    <div className={`col-xs-${size}`}>
      <button type="button" onClick={onClick} className="btn">
        {value}
      </button>
    </div>
  );
};

export default CalcButton;
