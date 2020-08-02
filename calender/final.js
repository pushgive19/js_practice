const set = {
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
  checkCN: null,
};

const calBody = document.querySelector(".table__body");
const prevBtn = document.querySelector(".ctr__prev");
const nextBtn = document.querySelector(".ctr__next");

document.querySelector(".cal__day").textContent = set.day[set.today.getDay()];
document.querySelector(".cal__date").textContent = set.today.getDate();

function loadCal(fullDate) {
  const yy = fullDate.getFullYear();
  const mm = fullDate.getMonth();
  const firstDay = set.getFirstDay(yy, mm);
  const lastDay = set.getLastDay(yy, mm);
  let markToday;
  if (set.today.getMonth() === mm && set.today.getFullYear() === yy) {
    markToday = true;
  }
  // ctr-box data 표시
  document.querySelector(".ctr__month").textContent = set.month[mm];
  document.querySelector(".ctr__year").textContent = yy;

  let trtd = "";
  let startCount;
  let dateNum = 0;
  for (let i = 0; i < 6; i++) {
    trtd += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && !startCount && j === firstDay.getDay()) {
        startCount = 1;
      }
      if (!startCount) {
        trtd += "<td>";
      } else {
        trtd += '<td class="day ';
        trtd +=
          markToday && set.today.getDate() === dateNum + 1 ? 'today">' : '">';
        // markToday 없이 진행하면 어떻게 될까? && 뒤에 조건문 다시 확인해줘.
        trtd += startCount && 1 ? ++dateNum : "";
        if (lastDay.getDate() === dateNum) {
          startCount = 0;
        }
      }
      trtd += "</td>";
    }
    trtd += "</tr>";
    calBody.innerHTML = trtd;
  }
}
// function handleClick() {
//   loadCal(set.prevMonth());
// }
function clickDate(e) {
  if (e.target.classList.contains("day")) {
    if (set.checkCN) {
      set.checkCN.classList.remove("clicked");
    }
    e.target.classList.add("clicked");
    set.checkCN = e.target;
    document.querySelector(".cal__day").textContent =
      set.day[e.target.cellIndex];
    document.querySelector(".cal__date").textContent = e.target.textContent;
  }
}
function init() {
  loadCal(set.today);
  calBody.addEventListener("click", clickDate);
  prevBtn.addEventListener("click", () => loadCal(set.prevMonth()));
  // prevBtn.addEventListener("click", handleClick);
  nextBtn.addEventListener("click", () => loadCal(set.nextMonth()));
}
init();
