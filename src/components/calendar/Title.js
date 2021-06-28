import React from "react";

const Title = ({
  hijriYear,
  hijriMonth,
  hijriMonthName,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    <div className="calendar-title">
      <button onClick={onPreviousClick}>Previous</button>
      <h2 className="text-center">
        {hijriMonth}. {hijriMonthName}, {hijriYear}
      </h2>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default Title;
