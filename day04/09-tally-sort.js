function randomArray(max, size) {
	let result = new Array(size);
	for (let i = 0; i < size; i++) {
		let random = Math.floor(max * Math.random());
		result[i] = random;
	}
	return result;
}

function tallySort(arr) {
	// find the max number in the array
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = Math.max(max, arr[i]);
		}
	}

	// tally all the numbers
	let tally = new Array(max);
	for (let i = 0; i < arr.length; i++) {
		// look at the number in the array
		let value = arr[i];

		// use the value of the number as an  index into the tally array, see if anything is defined
		// there to determine if we've started tallying this number
		if (tally[value] === undefined) {
			// set it to zero occurrences if we've not seen the number yet
			tally[value] = 0;
		}
		// increment how many times we've seen that number
		tally[value]++;
	}

	console.log(tally);

	let result = new Array(arr.length);
	let index = 0;
	for (let i = 0; i < result.length; i++) {
		let occurrences = tally[i];
		let n = 0;
		while (n < occurrences) {
			result[index] = i;
			index++;
			n++;
		}
	}
	return result;
}

const thisArray = randomArray(3, 10);
console.log("this is the array", thisArray);
const tallySortedArray = tallySort(thisArray);
console.log(tallySortedArray);
