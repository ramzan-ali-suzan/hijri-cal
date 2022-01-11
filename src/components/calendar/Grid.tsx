import { getMonthLastDate, getMonthFirstDay } from "../../helpers/hijriDate";

type Props = {
  hijriYear: number;
  hijriMonth: number;
  hijriDate: string;
};

const Grid = ({ hijriYear, hijriMonth, hijriDate }: Props) => {
  const weekDays = [
    "Al 'Ahad", // Sunday
    "Al 'Ithnayn", // Monday
    "Ath Thulathaa'", // Tuesday
    "Al Arbi'aa'", // Wednesday
    "Al Khamees", // Thursday
    "Al Juma'a", // Friday
    "As Sabt", // Saturday
  ];

  const daysPadding = Array.from(
    { length: getMonthFirstDay(hijriYear, hijriMonth) },
    (_, i) => i
  );

  const dates = Array.from(
    { length: getMonthLastDate(hijriYear, hijriMonth) },
    (_, i) => i + 1
  );

  const today = (day: number): boolean => {
    return `${hijriYear}/${hijriMonth}/${day}` === hijriDate;
  };

  return (
    <div>
      <div className="calendar-grid-header">
        {weekDays.map((value, index) => {
          return (
            <div className="calendar-grid-item" key={index}>
              {value}
            </div>
          );
        })}
      </div>
      <div className="calendar-grid">
        {daysPadding.map((value, index) => {
          return <div className="calendar-grid-item" key={index}></div>;
        })}
        {dates.map((value, index) => {
          return (
            <div
              className={`calendar-grid-item ${today(value) ? "today" : ""}`}
              key={index}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
