const initial = {
  day: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  month: [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  today: new Date(),
  addZero: (num) => (num < 10 ? `0${num}` : num),
  thisMonth: function () {
    return this.today.getMonth();
  },
  thisYear: function () {
    return this.today.getFullYear();
  },
  getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
};
const todayDay = document.querySelector(".clicked__day"),
  todayDate = document.querySelector(".clicked__date"),
  ctrDay = document.querySelector(".ctr__box-day"),
  ctrDate = document.querySelector(".ctr__box-date");
let makeTable = document.querySelector(".calendar__table");

function printToday() {
  const day = initial.today.getDay();
  const date = initial.today.getDate();
  todayDay.textContent = initial.day[day];
  todayDate.textContent = date;
}
function printCtr() {
  ctrDay.textContent = initial.day[initial.today.getDay()];
  ctrDate.textContent = initial.today.getDate();
}
function printCalendar() {
  let saveDate = "";
  let dayNum = 0;
  const isFirst = initial
    .getFirstDay(initial.thisYear(), initial.thisMonth())
    .getDay();
  const isLast = initial
    .getLastDay(initial.thisYear(), initial.thisMonth())
    .getDate();
  for (let i = 0; i < 6; i++) {
    saveDate += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < isFirst) {
        saveDate += "<td></td>";
      } else {
        if (dayNum < isLast) {
          // console.log(dayNum, isLast);
          if (dayNum === initial.today.getDate() - 1) {
            console.log(dayNum, dayNum - 1);
            saveDate += `<td class="day today">${++dayNum}`;
            saveDate += "</td>";
          } else {
            saveDate += `<td class="day">${++dayNum}`;
            saveDate += "</td>";
          }
        }
      }
    }
    saveDate += "</tr>";
  }
  makeTable.innerHTML += saveDate;
  console.log(saveDate);
  printCtr();
}

function init() {
  printToday();
  printCalendar();
}
init();
