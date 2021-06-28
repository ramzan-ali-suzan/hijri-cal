import moment from "moment-hijri";

export const getYear = (year) => {
  return moment(`${year}`, "YYYY").format("iYYYY");
};

export const getMonth = (year, month, day) => {
  return moment(`${year}/${month}/${day}`, "YYYY/M/D").format("iM");
};

export const getDay = (year, month, day) => {
  return moment(`${year}/${month}/${day}`, "YYYY/M/D").format("iD");
};

export const getGToHMonthName = (year, month, day) => {
  return moment(`${year}/${month}/${day}`, "YYYY/M/D").format("iMMMM");
};

export const getHToHMonthName = (iYear, iMonth) => {
  return moment(`${iYear}/${iMonth}`, "iYYYY/iM").format("iMMMM");
};

export const getMonthFirstDay = (iYear, iMonth) => {
  return moment(`${iYear}/${iMonth}/1`, "iYYYY/iM/iD").day();
};

export const getMonthLastDate = (iYear, iMonth) => {
  return moment(`${iYear}/${iMonth}/30`, "iYYYY/iM/iD").isValid() ? 30 : 29;
};
