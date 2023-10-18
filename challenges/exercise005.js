export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const index = nums.indexOf(n);

	if (index === -1 || index === nums.length - 1) {
		return null;
	}

	return nums[index + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	const count = { '1': 0, '0': 0 };

	for (const char of str) {
		if (char === '1') {
			count['1']++;
		} else if (char === '0') {
			count['0']++;
		}
	}

	return count;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let total = 0;

	for (const arr of arrs) {
		total += arr.reduce((acc, num) => acc + num, 0);
	}

	return total;};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	const length = arr.length;

	if (length < 2) {
		return arr;
	}

	const first = arr[0];
	const middle = arr.slice(1, length - 1);
	const last = arr[length - 1];

	return [last, ...middle, first];
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');

	const keys = Object.keys(haystack);

	for (const key of keys) {
		if (typeof haystack[key] === 'string' && haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
			return true;
		}
	}

	return false;};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	const words = str.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
	const frequencies = {};

	for (const word of words) {
		frequencies[word] = (frequencies[word] || 0) + 1;
	}

	return frequencies;};
