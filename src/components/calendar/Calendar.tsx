import { useState, useEffect } from "react";

import Title from "./Title";
import Grid from "./Grid";
import {
  getYear,
  getMonth,
  getMonthNameByGregorian,
  getMonthName,
  getFullDate,
} from "../../utils/hijriDate";

type Props = {
  showGDate: boolean;
  dateAdjust: string;
};

const Calendar = ({ showGDate, dateAdjust }: Props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const [iYear, setIYear] = useState(getYear(year));
  const [iMonth, setIMonth] = useState(getMonth(year, month, date));
  const [iDate, setIDate] = useState(getFullDate(dateAdjust));
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
    setIDate(getFullDate(dateAdjust));
    setIMonthName(getMonthName(iYear, iMonth));
  }, [dateAdjust, iYear, iMonth]);

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
      <Grid
        showGDate={showGDate}
        hijriYear={iYear}
        hijriMonth={iMonth}
        hijriDate={iDate}
        dateAdjust={dateAdjust}
      ></Grid>
    </div>
  );
};

export default Calendar;
