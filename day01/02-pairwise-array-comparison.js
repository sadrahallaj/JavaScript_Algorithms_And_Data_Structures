const weeklyWeather = [70, 72, 69, 47, 70, 71, 74];

let maxDelta = Math.abs(weeklyWeather[0] - weeklyWeather[1]);
for (let i = 0; i < weeklyWeather.length - 1; i++) {
	let temp1 = weeklyWeather[i];
	let temp2 = weeklyWeather[i + 1];

	let delta = Math.abs(temp1 - temp2);
	if (delta > maxDelta) {
		maxDelta = delta;
	}
}

let maxDelta2 = Math.abs(weeklyWeather[0] - weeklyWeather[1]);
for (let i = 1; i < weeklyWeather.length; i++) {
	let temp1 = weeklyWeather[i - 1];
	let temp2 = weeklyWeather[i];

	let delta = Math.abs(temp1 - temp2);
	if (delta > maxDelta2) {
		maxDelta2 = delta;
	}
}
