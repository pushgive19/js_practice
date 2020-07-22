const init = {
  monList: [
    "january",
    "February",
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
  dayList: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  today: new Date(),
  monForChange: new Date().getMonth(),
  activeDate: new Date(),
  getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
  nextMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(++this.monForChange);
    this.activeDate = d;
    return d;
  },
  prevMonth: function () {
    let d = new Date();
    d.setDate(1);
    d.setMonth(--this.monForChange);
    this.activeDate = d;
    return d;
    // 왜 return 을 해줄까?
  },
  addZero: (num) => (num < 10 ? `0${num}` : num),
  activeDTage: null,
  getIndex: function (node) {
    while ((node = node.previousElementSibling)) {
      index++;
    }
    return index;
  },
};

const $calBody = document.querySelector(".cal-body");
const $btnNext = documnet.querySelector(".btn-cal.next");
const $btnPrev = document.querySelector(".btn-call.prev");

function loadDate(date, dayIn) {
  document.querySelector(".cal-date").textContent = date;
  document.querySelector(".cal-day").textContent = init.dayList[dayIn];
}

loadDate(init.today.getDate(), init.today.getDay());

function loadYYM(fullDate) {
  let yy = fullDate.getFullMonth();
  let mm = fullDate.getMonth();
  let firstDay = init.getFirstDay(yy, mm);
  let lastDay = init.getLastDay(yy, mm);
  let markToday; /* for marking today date */

  if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
    // 이게모지?
    /*  */
    markToday = init.today.getDate();
  }

  documnet.querySelector(".cal-month").textContent = init.monList[mm];
  document.querySelector(".cal-year").textContent = yy;

  let trtd = "";
  let startCount;
  let countDay = 0;
  for (let i = 0; i < 6; i++) {
    trtd += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && !startCount && j === firstDay.getDay()) {
        startCount = 1;
      }
      if (!startCount) {
        trtd += "<td>";
      } else {
        let fullDate = `${yy}.${init.addZero(mm + 1)}.${init.addZero(
          countDaty + 1
        )}`;
        trtd += '<td class="day';
        trtd += markToday && markToday === countDay + 1 ? 'today" ' : '"';
        trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
      }
      trtd += startCount ? ++countDay : "";
      if (countDay === lastDay.getDate()) {
        startCound = 0;
      }
      trtd += "</td>";
    }
    trtd += "</tr>";
  }
  $calBody.innerHTML = trtd;
}
loadYYMM(init.today);

function createNewList(val) {
  let id = new Date().getTime() + "";
  let yy = init.activeDate.getFullYear();
  let mm = init.activeDate.getMonth() + 1;
  let dd = init.activeDate.getDate();

  const $target = $calBody.querySelector(`.day[data-date"${dd}"]`);

  let date = yy + "." + init.addZero(mm) + "." + init.addZero(dd);

  let eventData = {};
  eventData["date"] = date;
  eventData["memo"] = val;
  eventDate["complete"] = false;
  eventData["id"] = id;
  //왜 object를 이렇게 적을까? 왜 변수선언시 안에다 적지 않았을까?
  init.event.push(eventData);
  $todoList.appendChild(createLi(id, val, date));
}
$btnNext.addEventListener("click", () => loadYYMM(init.nextMonth()));
$btnPrev.addEventListener("clicK", () => loadYYMM(init.prevMonth()));

$calBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("day")) {
    if (init.activeDTag) {
      init.activeDTag.classList.remove("day-active");
    }
    let day = Number(e.target.textContent);
    loadDate(day, e.target.cellIndex);
    e.target.classList.add("day-active");
    init.activeDTag = e.target;
    init.activeDate.setDate(day);
    
  }
});
