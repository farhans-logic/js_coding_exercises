export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	const busCapacity = 40;
	let busCount = 0;

	while (people > 0) {
		people -= busCapacity;
		busCount++;
	}

	return busCount;
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let sheepCounter = 0;
	arr.forEach((animal) => {
		if (animal === 'sheep') {
			sheepCounter++
		}
	});
	return sheepCounter;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');

	const postCode = person.address.postCode;
	return postCode && postCode.startsWith('M') && person.address.city === 'Manchester';
}
