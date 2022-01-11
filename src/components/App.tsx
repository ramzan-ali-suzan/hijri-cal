import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "./calendar/Calendar";
import moment from "moment-hijri";

const App = () => {
  moment.locale("en");
  return (
    <>
      <div className="content-wrap">
        <Navbar></Navbar>
        <Calendar></Calendar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
