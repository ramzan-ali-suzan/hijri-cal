import Navbar from "./Navbar";
import Footer from "./Footer";
import Calendar from "./calendar/Calendar";
import moment from "moment-hijri";

const App = () => {
  moment.locale("en");
  return (
    <div>
      <Navbar></Navbar>
      <Calendar></Calendar>
      <Footer></Footer>
    </div>
  );
};

export default App;
