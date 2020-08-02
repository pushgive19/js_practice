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
  monForChange: new Date().getMonth(),
  addZero: (num) => (num < 10 ? `0${num}` : num),
  thisMonth: function () {
    return this.today.getMonth();
  } /* 이거 굳이 이렇게 안하고 thisMonth 하면서 new Date().getMonth(),해도 되잖어 */,
  thisYear: function () {
    return this.today.getFullYear();
  },
  getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
  prevMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(--this.monForChange);
    return d;
  },
  nextMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(++this.monForChange);
    return d;
  },
  isClicked: null,
};
const todayDay = document.querySelector(".clicked__day"),
  todayDate = document.querySelector(".clicked__date"),
  ctrMonth = document.querySelector(".ctr__box-month"),
  ctrYear = document.querySelector(".ctr__box-year"),
  btnPrev = document.querySelector(".cal__btn.prev"),
  btnNext = document.querySelector(".cal__btn.next"),
  calBody = document.querySelector(".cal-body");
let makeTable = document.querySelector(".calendar__table");
let clickMonth = initial.thisMonth();
let clickYear = initial.thisYear();

function printToday(d, date) {
  todayDay.textContent = initial.day[d];
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
function printCalendar(fullDate) {
  console.log(fullDate);
  const yy = fullDate.getFullYear();
  const mm = fullDate.getMonth();
  const firstDay = initial.getFirstDay(yy, mm);
  const LastDay = initial.getLastDay(yy, mm);
  let markToday;
  if (mm === initial.today.getMonth() && yy === initial.today.getFullYear()) {
    markToday = initial.today.getDate();
  }
  // printCtr(yy, mm);
  ctrMonth.textContent = initial.month[mm];
  ctrYear.textContent = yy;
  let saveDate = "";
  let dayNum = 0;
  let startCount;
  // const isFirst = initial.getFirstDay(yy, mm).getDay();
  // const isLast = initial.getLastDay(yy, mm).getDate();
  for (let i = 0; i < 6; i++) {
    saveDate += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && !startCount && j === firstDay.getDay()) {
        startCount = 1;
      }
      if (!startCount) {
        saveDate += "<td>";
      } else {
        saveDate += '<td class="day';
        saveDate += markToday && markToday === dayNum + 1 ? ' today">' : '">';
      }
      saveDate += startCount ? ++dayNum : "";
      saveDate += "</td>";
      if (dayNum === LastDay.getDate()) {
        startCount = 0;
      }
      // if (dayNum < isLast) {
      //   // console.log(dayNum, isLast);
      //   if (
      //     dayNum === initial.today.getDate() - 1 &&
      //     mm === initial.thisMonth()
      //   ) {
      //     console.log(dayNum, dayNum - 1, "hi");
      //     saveDate += `<td class="day today">${++dayNum}`;
      //     saveDate += "</td>";
      //   } else {
      //     saveDate += `<td class="day">${++dayNum}`;
      //     saveDate += "</td>";
      //   }
      // }
    }
    saveDate += "</tr>";
  }
  calBody.innerHTML = saveDate;

  //click하면 색상과 왼쪾 변경하기 위해서
  // const day = document.querySelectorAll(".day");
  // clickDay(day);
}
function clickDay(e) {
  // for (const iterate of day) {
  //   let checkClicked = false;
  //   let saveClicked;
  //   console.log("checkClicked :>> ", checkClicked);
  //   iterate.addEventListener("click", function (e) {
  //     console.log("checkClicked :>> ", checkClicked);
  //     if (!checkClicked) {
  //       e.target.classList.toggle("clicked");
  //       saveClicked = e.target;
  //       console.log("saveClicked :>> ", saveClicked);
  //     } else {
  //       console.log("saveClicked :>> ", saveClicked);
  //       console.log("saveClicked === e.target :>> ", saveClicked === e.target);
  //       e.target.classList.toggle("clicked");
  //     }
  //     printToday(0, e.target.innerText);
  //   });
  //   checkClicked = true;
  // }console.log
  console.log(e.target.classList);
  if (e.target.classList.contains("day")) {
    if (initial.isClicked) {
      initial.isClicked.classList.remove("clicked");
    }
    todayDay.textContent = initial.day[e.target.cellIndex];
    todayDate.textContent = e.target.textContent;
    e.target.classList.add("clicked");
    initial.isClicked = e.target;
  }
}
function init() {
  printToday(initial.today.getDay(), initial.today.getDate());
  printCalendar(initial.today);
  btnPrev.addEventListener("click", () => printCalendar(initial.prevMonth()));
  btnNext.addEventListener("click", () => printCalendar(initial.nextMonth()));
  calBody.addEventListener("click", clickDay);
}
init();
