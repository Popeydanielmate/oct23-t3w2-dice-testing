const { rollDice } = require("../src/diceRolling")

beforeEach(() => {
    // before each individual test runs,
    // so this block can run multiple times per file

    console.log("A test has been started!");
});

afterEach (() => {
    // after each individual test, so this block could run multiple times per file

    console.log("A test has finished");
});

beforeAll(() => {
    console.log("Testing will begin")
});

afterAll(() => {
    console.log("All tests are now done!")
});


describe('As a casual gamer...', () => { 

    // As a blah blah, I want to blah blah, because of blah blah

    test('...I want to roll a 6 sided dice...', () => {

        let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);

     });

 });

 describe('As a dungeon master...', () => {

    describe('...I want to roll a variety of dice sizes, such as...', () => {

        test('D6', () => { 
            let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);

        });

        test('D8', () => { 
            let result = rollDice(8);

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(8);

        });

        test('D10', () => { 
            let result = rollDice(10);

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(10);

        });

        test('D12', () => { 
            let result = rollDice(12);

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(12);

        });

        test('D20', () => { 
            let result = rollDice(20);

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(20);

        });


    });

 });