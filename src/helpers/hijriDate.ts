import moment from "moment-hijri";

export const getYear = (year: number): number => {
  return Number(moment(`${year}`, "YYYY").format("iYYYY"));
};

export const getMonth = (year: number, month: number, date: number): number => {
  return Number(moment(`${year}/${month}/${date}`, "YYYY/M/D").format("iM"));
};

export const getMonthName = (iYear: number, iMonth: number): string => {
  return moment(`${iYear}/${iMonth}`, "iYYYY/iM").format("iMMMM");
};

export const getMonthNameByGregorian = (year: number, month: number, date: number): string => {
  return moment(`${year}/${month}/${date}`, "YYYY/M/D").format("iMMMM");
};

export const getFullDate = (): string => {
  return moment().format("iYYYY/iM/iD");
};

export const getMonthFirstDay = (iYear: number, iMonth: number): number => {
  return moment(`${iYear}/${iMonth}/1`, "iYYYY/iM/iD").day();
};

export const getMonthLastDate = (iYear: number, iMonth: number): number => {
  return moment(`${iYear}/${iMonth}/30`, "iYYYY/iM/iD").isValid() ? 30 : 29;
};
