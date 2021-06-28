import React from "react";
import {
  getCurrentMonthLastDate,
  getCurrentHijriDate,
  getDay,
} from "../../helpers/hijriDate";

const Grid = () => {
  const weekDays = [
    "Al ‘Ahad", // Sunday
    "Al ‘Ithnayn", // Monday
    "Ath Thulathaa’", // Tuesday
    "Al Arbi’aa’", // Wednesday
    "Al Khamees", // Thursday
    "Al Juma'a", // Friday
    "As Sabt", // Saturday
  ];
  const lastDate = getCurrentMonthLastDate();
  const today = getCurrentHijriDate();
  const dayNumner = getDay();
  const dates = Array.from({ length: lastDate }, (_, i) => i + 1);
  const daysPadding = Array.from({ length: dayNumner }, (_, i) => i);

  return (
    <div>
      <div className="calendar-header">
        {weekDays.map((value, index) => {
          return (
            <div className="grid-item" key={index}>
              {value}
            </div>
          );
        })}
      </div>
      <div className="calendar-grid">
        {daysPadding.map((value, index) => {
          return <div className="grid-item" key={index}></div>;
        })}
        {dates.map((value, index) => {
          return (
            <div className="grid-item" key={index}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
