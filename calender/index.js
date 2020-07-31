// 문제1 button 그림자 남아있어
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
  ctrMonth = document.querySelector(".ctr__box-month"),
  ctrYear = document.querySelector(".ctr__box-year"),
  btnPrev = document.querySelector(".cal__btn.prev"),
  btnNext = document.querySelector(".cal__btn.next");
let makeTable = document.querySelector(".calendar__table");
let clickMonth = initial.thisMonth();
let clickYear = initial.thisYear();

function printToday() {
  const day = initial.today.getDay();
  const date = initial.today.getDate();
  todayDay.textContent = initial.day[day];
  todayDate.textContent = date;
}
function printCtr(yy, mm) {
  // let year = yy;
  // let month = 0;
  // if (mm === -1) {
  //   year--;
  //   month;
  // }
  ctrMonth.textContent = initial.month[mm];
  ctrYear.textContent = yy;
  console.log("yy,mm :>> ", yy, mm);
  // ctrMonth.textContent = initial.month[initial.today.getDay()];
  // ctrYear.textContent = initial.today.getFullYear();
}
function printCalendar(yy, mm) {
  console.log("yy,mm :>> ", yy, mm);
  printCtr(yy, mm);
  let saveDate = "";
  let dayNum = 0;
  const isFirst = initial.getFirstDay(yy, mm).getDay();
  const isLast = initial.getLastDay(yy, mm).getDate();
  for (let i = 0; i < 6; i++) {
    saveDate += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < isFirst) {
        saveDate += "<td></td>";
      } else {
        if (dayNum < isLast) {
          // console.log(dayNum, isLast);
          if (
            dayNum === initial.today.getDate() - 1 &&
            mm === initial.thisMonth()
          ) {
            console.log(dayNum, dayNum - 1, "hi");
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
  console.log(saveDate);
  makeTable.innerHTML += saveDate;
}
function handlePrev() {
  // const prevMonth = new Date(yy, mm);
  makeTable.innerHTML =
    "<tr>" +
    "<th>Sun</th>" +
    "<th>Mon</th>" +
    "<th>Tue</th>" +
    "<th>Wen</th>" +
    "<th>Thu</th>" +
    "<th>Fri</th>" +
    "<th>Sat</th>" +
    "</tr>";
  console.log("makeTable.innerHTML :>> ", makeTable.textContent);
  clickMonth--;
  if (clickMonth === -1) {
    clickMonth = 11;
    clickYear--;
  }
  printCalendar(clickYear, clickMonth);
}
function handleNext() {
  makeTable.innerHTML =
    "<tr>" +
    "<th>Sun</th>" +
    "<th>Mon</th>" +
    "<th>Tue</th>" +
    "<th>Wen</th>" +
    "<th>Thu</th>" +
    "<th>Fri</th>" +
    "<th>Sat</th>" +
    "</tr>";
  console.log("makeTable.innerHTML :>> ", makeTable.textContent);
  clickMonth++;
  if (clickMonth === 12) {
    clickMonth = 0;
    clickYear++;
  }
  printCalendar(clickYear, clickMonth);
}
function init() {
  printToday();
  printCalendar(initial.thisYear(), initial.thisMonth());
  btnPrev.addEventListener("click", handlePrev);
  btnNext.addEventListener("click", handleNext);
}
init();
