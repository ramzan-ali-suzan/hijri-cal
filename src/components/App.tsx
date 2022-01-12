import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "./calendar/Calendar";
import moment from "moment-hijri";
import { useState } from "react";

const App = () => {
  moment.locale("en");
  const [showGDate, setShowGDate] = useState(false);

  const toggleGDate = () => {
    setShowGDate(!showGDate);
  };

  return (
    <>
      <div className="content-wrap">
        <Navbar showGDate={showGDate} onGDateChange={toggleGDate}></Navbar>
        <Calendar showGDate={showGDate}></Calendar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
