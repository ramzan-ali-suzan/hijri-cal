import React from "react";
import moment from "moment-hijri";

const Title = () => {
  return (
    <div className="calendar-title">
      <h2 className="text-center">
        {moment().format("iM")}. {moment().format("iMMMM")},{" "}
        {moment().format("iYYYY")}
      </h2>
    </div>
  );
};

export default Title;
