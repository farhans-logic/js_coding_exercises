import {parse} from "@babel/core";

export function findSmallNums(nums) {
    if (!nums) throw new Error('nums is required');

    const smallNums = [];

    for (const num of nums) {
        if (num < 1) {
            smallNums.push(num);
        }
    }
    return smallNums;
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error('names is required');
    if (!char) throw new Error('char is required');

    const namesBeginningWithChar = [];

    for (const name of names) {
        if (name.charAt(0) === char) {
            namesBeginningWithChar.push(name);
        }
    }
    return namesBeginningWithChar;
}

export function findVerbs(words) {
    if (!words) throw new Error('words is required');
    const verbs = [];

    for (const word of words) {
        if (word.startsWith('to ')) {
            verbs.push(word);
        }
    }
    return verbs;
}

export function getIntegers(nums) {
    if (!nums) throw new Error('nums is required');

    const integers = [];

    for (const num of nums) {
        if (Number.isInteger(num)) {
            integers.push(num);
        }
    }
    return integers;
}

export function getCities(users) {
    if (!users) throw new Error('users is required');

    const cities = [];

    for (const user of users) {
        cities.push(user.data.city.displayName);
    }

    return cities;
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error('nums is required');

    return nums.map((num) =>
        parseFloat(Math.sqrt(num).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error('sentences is required');
    if (!str) throw new Error('str is required');

    const sentencesContainingStr = [];

    for (const sentence of sentences) {
        if (sentence.toLowerCase().includes(str.toLowerCase())) {
            sentencesContainingStr.push(sentence);
        }
    }

    return sentencesContainingStr;
}

export function getLongestSides(triangles) {
    if (!triangles) throw new Error('triangles is required');

    const longestSides = [];

    for (const triangle of triangles) {
        // Sort the triangle sides in ascending order.
        triangle.sort((a, b) => a - b);

        // The longest side is the last element in the sorted array.
        const longestSide = triangle[triangle.length - 1];

        longestSides.push(longestSide);
    }

    return longestSides;
}
