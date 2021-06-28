import { MouseEventHandler } from "react";

type Props = {
  hijriYear: number;
  hijriMonth: number;
  hijriMonthName: string;
  onPreviousClick: MouseEventHandler;
  onNextClick: MouseEventHandler;
};

const Title = ({
  hijriYear,
  hijriMonth,
  hijriMonthName,
  onPreviousClick,
  onNextClick,
}: Props) => {
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