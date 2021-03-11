const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weeklyWeather = [70, 72, 69, 67, 70, 71, 74];

for (let i = 0; i < weekDays.length; i++) {
  let weekday = weekDays[i];
  let temprature = weeklyWeather[i];
}

let total_temp = 0;
for (let i = 0; i < weeklyWeather.length; i++) {
  let temp = weeklyWeather[i];
  total_temp += temp;
}
let temp_average_weekly = Math.round(total_temp / weeklyWeather.length);
