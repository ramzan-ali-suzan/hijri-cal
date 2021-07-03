import { useState, useEffect } from "react";
import Title from "./Title";
import Grid from "./Grid";
import {
  getYear,
  getMonth,
  getMonthNameByGregorian,
  getMonthName,
  getDate,
} from "../../helpers/hijriDate";

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const [iYear, setIYear] = useState(getYear(year));
  const [iMonth, setIMonth] = useState(getMonth(year, month, date));
  const [iDate, setIDate] = useState(getDate());
  const [iMonthName, setIMonthName] = useState(
    getMonthNameByGregorian(year, month, date)
  );

  const handlePrevious = () => {
    if (iMonth > 1) {
      setIMonth(iMonth - 1);
    } else {
      setIYear(iYear - 1);
      setIMonth(12);
    }
  };

  const handleToday = () => {
    setIYear(getYear(year));
    setIMonth(getMonth(year, month, date));
  };

  const handleNext = () => {
    if (iMonth < 12) {
      setIMonth(iMonth + 1);
    } else {
      setIYear(iYear + 1);
      setIMonth(1);
    }
  };

  useEffect(() => {
    setIMonthName(getMonthName(iYear, iMonth));
  }, [iMonth, iYear]);

  return (
    <div className="container calendar">
      <Title
        hijriYear={iYear}
        hijriMonth={iMonth}
        hijriMonthName={iMonthName}
        onPreviousClick={handlePrevious}
        onTodayClick={handleToday}
        onNextClick={handleNext}
      ></Title>
      <Grid hijriYear={iYear} hijriMonth={iMonth} hijriDate={iDate}></Grid>
    </div>
  );
};

export default Calendar;
