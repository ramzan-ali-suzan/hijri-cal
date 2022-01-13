import { useState } from "react";
import moment from "moment-hijri";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "./calendar/Calendar";

const App = () => {
  moment.locale("en");
  const [showGDate, setShowGDate] = useState(false);
  const [dateAdjust, setDateAdjust] = useState(
    localStorage.getItem("date-adjust") || ""
  );

  const toggleGDate = () => {
    setShowGDate(!showGDate);
  };

  const adjustDate = (event: React.FormEvent<HTMLSelectElement>) => {
    const selectedDateAdjust = (event.target as HTMLSelectElement).value;
    setDateAdjust(selectedDateAdjust);
    localStorage.setItem("date-adjust", selectedDateAdjust);
  };

  return (
    <>
      <div className="content-wrap">
        <Navbar
          showGDate={showGDate}
          onGDateChange={toggleGDate}
          dateAdjust={dateAdjust}
          onDateAjdust={adjustDate}
        ></Navbar>
        <Calendar showGDate={showGDate} dateAdjust={dateAdjust}></Calendar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
