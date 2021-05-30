const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
console.log(270 + 30 / 12);
setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  let ff = hh + mm / 12;

  hr.style.transform = "rotateZ(" + ff + "deg)";
  mn.style.transform = "rotateZ(" + mm + "deg)";
  sc.style.transform = "rotateZ(" + ss + "deg)";
}, 1000);
