//TDD(Test Driven Development)

const factorial = require('../src/index');

//describe는 테스트 그룹을 만드는 함수
describe('factorial function', () => {
    //테스트 케이스 1 (잘 작동하는지)
    it('correctly computes factorial of a positive integer number', () => {
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
        expect(factorial(4)).toEqual(24);
    });


    //테스트 케이스2 (오류가 잘 발생하는지)
    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1);
        }).toThrow('n must be a positive integer');
    });
});