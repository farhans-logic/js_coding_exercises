// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
    if (word === undefined) throw new Error('word is required');
    const firstLetter = word.charAt(0);
    const upperCaseFirstLetter = firstLetter.toUpperCase();
    return upperCaseFirstLetter + word.slice(1);
}

export function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error('firstName is required');
    if (lastName === undefined) throw new Error('lastName is required');
    const firstNameInitial = firstName[0];
    const lastNameInitial = lastName[0];
    return `${firstNameInitial}.${lastNameInitial}`;
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined)
        throw new Error('originalPrice is requied');
    if (vatRate === undefined) throw new Error('vatRate is required');
    const vatAmount = originalPrice * (vatRate / 100);
    const totalPriceWithVAT = originalPrice + vatAmount;
    return parseFloat(totalPriceWithVAT.toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined)
        throw new Error('originalPrice is required');
    if (reduction === undefined) throw new Error('reduction is required');
    const discountAmount = originalPrice * (reduction / 100);
    const totalPriceWithDiscount = originalPrice - discountAmount;
    return parseFloat(totalPriceWithDiscount.toFixed(2));
}

export function getMiddleCharacter(str) {
    if (str === undefined) throw new Error('str is required');
    const strLength = str.length;

    if (strLength === 0) return null;

    if (strLength % 2 === 0) {
        const middleIndex = strLength / 2 - 1;
        return str[middleIndex] + str[middleIndex + 1];
    } else {
        const middleIndex = Math.floor(strLength / 2);
        return str[middleIndex];
    }
}

export function reverseWord(word) {
    if (word === undefined) throw new Error('word is required');
    const wordCharacters = word.split('');
    wordCharacters.reverse();
    return wordCharacters.join('');
}

export function reverseAllWords(words) {
    if (words === undefined) throw new Error('words is required');
    const allWords = words.splice('');
    return allWords.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
    if (users === undefined) throw new Error('users is required');
    let linuxUserCount = 0;
    users.forEach(user => {
        if (user.type === 'Linux') {
            linuxUserCount++
        }
    });
	return linuxUserCount;
}

export function getMeanScore(scores) {
    if (scores === undefined) throw new Error('scores is required');
    const sum =  scores.reduce((a, b) => a + b, 0);
    return parseFloat((sum/scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error('n is required');
    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    } else if (n % 3 === 0) {
        return 'fizz';
    } else if (n % 5 === 0) {
        return 'buzz';
    } else {
        return n;
    }
}
