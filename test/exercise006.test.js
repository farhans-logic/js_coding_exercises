import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from '../challenges/exercise006';

describe('sumMultiples', () => {
    it('returns the sum of multiples of 3 or 5', () => {
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
    });

    it('handles empty input', () => {
        expect(sumMultiples([])).toBe(0);
    });

    it('handles no multiples of 3 or 5', () => {
        expect(sumMultiples([1, 7, 8, 11])).toBe(0);
    });
});

describe('isValidDNA', () => {
    it('returns true for valid DNA strings', () => {
        expect(isValidDNA('CGTA')).toBe(true);
    });

    it('returns false for invalid DNA strings', () => {
        expect(isValidDNA('CGTAX')).toBe(false);
    });
});

describe('getComplementaryDNA', () => {
    it('returns complementary DNA string', () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
    });
});

describe('isItPrime', () => {
    it('returns true for prime numbers', () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(7)).toBe(true);
    });

    it('returns false for non-prime numbers', () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(4)).toBe(false);
    });
});

describe('createMatrix', () => {
    it('creates a matrix of given size filled with given value', () => {
        expect(createMatrix(3, 'foo')).toEqual([
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo']
        ]);
    });
});

describe('areWeCovered', () => {
    const staff = [
        { name: 'Alice', rota: ['Monday', 'Tuesday', 'Wednesday'] },
        { name: 'Bob', rota: ['Tuesday', 'Thursday', 'Saturday'] },
        { name: 'Charlie', rota: ['Monday', 'Tuesday', 'Friday'] },
    ];

    it('returns true if there are 3 or more staff available', () => {
        expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    });

    it('returns false if there are less than 3 staff available', () => {
        expect(areWeCovered(staff, 'Thursday')).toBe(false);
    });

    it('handles empty staff list', () => {
        expect(areWeCovered([], 'Sunday')).toBe(false);
    });
});
