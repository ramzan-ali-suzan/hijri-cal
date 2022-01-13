import { ChangeEventHandler } from "react";

type Props = {
  showGDate: boolean;
  dateAdjust: string;
  onGDateChange: ChangeEventHandler<HTMLInputElement>;
  onDateAjdust: ChangeEventHandler<HTMLSelectElement>;
};

const Navbar = ({
  showGDate,
  onGDateChange,
  dateAdjust,
  onDateAjdust,
}: Props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="app-title">🌙 Hijri Calendar</h1>
        <div className="control-container">
          <div className="g-date-control">
            <label className="g-date-label">
              Gregorian Date:
              <input
                name="gregorianDate"
                type="checkbox"
                checked={showGDate}
                onChange={onGDateChange}
              />
            </label>
          </div>
          <div className="date-adjust-control">
            <label htmlFor="date-adjust-select">Adjust Date: </label>
            <select
              name="date-adjust"
              id="date-adjust-select"
              value={dateAdjust}
              onChange={(e) => onDateAjdust(e)}
            >
              <option value="0">0</option>
              <option value="+1">+1</option>
              <option value="-1">-1</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
