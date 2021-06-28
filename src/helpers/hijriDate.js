import moment from "moment-hijri";

export const getCurrentHijriYear = () => {
  return moment().format("iYYYY");
};

export const getCurrentHijriMonth = () => {
  return moment().format("iMM");
};

export const getCurrentHijriDate = () => {
  return moment().format("iD");
};

export const getCurrentMonthLastDate = () => {
  return moment(
    `${getCurrentHijriYear()}/${getCurrentHijriMonth()}/30`,
    "iYYYY/iMM/iDD"
  ).isValid()
    ? 30
    : 29;
};

export const getDay = () => {
  return moment().day();
};
