export function getSquares(nums) {
    if (nums === undefined) throw new Error('nums is required');
    return nums.map((num) => Math.pow(num, 2));
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error('words is required');

    if (words.length === 0) {
        return '';
    }

    const camelCaseWords = [words[0].toLowerCase()];
    for (let i = 1; i < words.length; i++) {
        camelCaseWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }

    return camelCaseWords.join('');
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error('people is required');

    let totalSubjects = 0;
    for (const person of people) {
        totalSubjects += person.subjects.length;
    }
    return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error('menu is required');
    if (!ingredient) throw new Error('ingredient is required');

    for (const item of menu) {
        if (item.ingredients.includes(ingredient)) {
            return true;
        }
    }

    return false;
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error('arr1 is required');
    if (arr2 === undefined) throw new Error('arr2 is required');

    const duplicateNumbers = [];

    const arr1Set = new Set(arr1);
    const arr2Set = new Set(arr2);

    for (const number of arr1Set) {
        if (arr2Set.has(number)) {
            duplicateNumbers.push(number);
        }
    }

    duplicateNumbers.sort();

    return duplicateNumbers;
}