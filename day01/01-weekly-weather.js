const week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekly_weather = [70, 72, 69, 67, 70, 71, 74];

for (let i = 0; i < week_days.length; i++) {
  let weekday = week_days[i];
  let temprature = weekly_weather[i];
  console.log(`temprature on ${weekday} was ${temprature} degrees`);
}

let total_temp = 0;
for (let i = 0; i < weekly_weather.length; i++) {
  let temp = weekly_weather[i];
  total_temp += temp;
}

let temp_average_weekly = Math.round(total_temp / weekly_weather.length);
console.log(temp_average_weekly);
