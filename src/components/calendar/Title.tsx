import { MouseEventHandler } from "react";
import { ArrowRight, ArrowLeft } from "react-feather";

type Props = {
  hijriYear: number;
  hijriMonth: number;
  hijriMonthName: string;
  onPreviousClick: MouseEventHandler<HTMLButtonElement>;
  onTodayClick: MouseEventHandler<HTMLButtonElement>;
  onNextClick: MouseEventHandler<HTMLButtonElement>;
};

const Title = ({
  hijriYear,
  hijriMonth,
  hijriMonthName,
  onPreviousClick,
  onTodayClick,
  onNextClick,
}: Props) => {
  return (
    <div className="calendar-title">
      <h2 className="text-center">
        {hijriMonth}. {hijriMonthName}, {hijriYear}
      </h2>
      <div>
        <button className="btn mr-2 warning" onClick={onTodayClick}>
          Today
        </button>
        <button
          className="btn mr-1 success"
          aria-label="Previous Month"
          onClick={onPreviousClick}
        >
          <ArrowLeft color="#fff" />
        </button>
        <button
          className="btn success"
          aria-label="Next Month"
          onClick={onNextClick}
        >
          <ArrowRight color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Title;
