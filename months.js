const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july",
  "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["sunDay", "monday", "tuesday", "wednesday", "thursday", 
  "friday", "saturday"];

const counter = function(num) {
  let one = -1;
  return function() {
    one++
    return one % num;
  }
}

const daysRef = counter(7);
const monthRef = counter(12);

const range = function(from, to, steps) {
  const dateInMonth = [];
  for (let date = from; date !== to; date = date + steps) {
    dateInMonth.push(date);
  }

  return dateInMonth;
}

const concateDateAndDay = function(dayArray, monthss, counterFun) {
  return function (element) {
    return element + " " + monthss[counterFun()] + " " + dayArray[daysRef()];
  }
}

const wholeYear = function () {
  const yearArray = [];
  for (const monthIndex of range(1, 13, 1)) {
    const monthdate = monthIndex % 1 ? 31 : 30;
    const dateRange = range(1, monthdate, 1);
    const func = counter(monthIndex);
    console.log("monthIndex", monthIndex);
    console.log(counter(monthIndex));
    console.log("func", func);
    const dateWithDay = dateRange.map(concateDateAndDay(days, months, func));
    yearArray.push(dateWithDay);
  }

  yearArray;
}
