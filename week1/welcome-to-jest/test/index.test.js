const positiveSum = require('../01-SumOfPositive');

describe("positiveSum tests", () => {
    beforeAll(() => {
        let mass = [];
    });

    beforeEach(() => {
        mass = [1,2,3,4,5];
    });
    test('test1', () => {
        expect(positiveSum(mass)).toBe(15);
    });

    test('test2', () => {
        expect(positiveSum([])).toBe(0);
    });

    test('test3', () => {
        expect(positiveSum([-13,52,5,-21,-79,-91,-86,-38,4,55,-67,35,22,-30,98,-45,-7,55,19,-31,10,42,-10,-36,-20,-16,95,75,96,-55,95,-72,-41,-24,3,38,48,-24,31,85,12,0,71,-37,0,33,21,36,48,-80])).toBe(1184);
    });

    test('test4', () => {
        expect(positiveSum([-70,8,57,-7,59,-43])).toBe(124);
    });

    test('test5', () => {
        expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
    });

    test('test6', () => {
        mass.push(...[-1, -2, 0]);
        expect(positiveSum(mass)).toBe(15);
    });
});

const partlist = require('../02-PartsOfAList');

describe("partlist tests", () => {
    beforeAll(() => {
        let listArr = [];
    });

    beforeEach(() => {
        listArr = ["I", "wish", "I"];
    });
    test('test1', () => {
        expect(Array.isArray(partlist(listArr))).toBe(true);
    });

    test('test2', () => {
        expect(partlist(listArr)).toEqual([["I", "wish I"], ["I wish", "I"]]);
    });

    test('test3', () => {
        listArr.push(...["hadn't", "come"])
        expect(partlist(listArr)).toEqual([["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
    });

    test('test4', () => {
        expect(partlist(["cdIw", "tzIy", "xDu", "rThG"])).toEqual([["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
    });

    test('test5', () => {
        expect(partlist(['NxE',
        'GzKHIV', 'zdw', 'sAVdW', 'ObB', 'PnPRrxJ', 'DQJzA', 'qgboLB', 'jRDhIEc', 'vWZNz', 'Rdw'])).toEqual([ [ 'NxE',
        'GzKHIV zdw sAVdW ObB PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV',
        'zdw sAVdW ObB PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw',
        'sAVdW ObB PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW',
        'ObB PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB',
        'PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB PnPRrxJ',
        'DQJzA qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB PnPRrxJ DQJzA',
        'qgboLB jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB PnPRrxJ DQJzA qgboLB',
        'jRDhIEc vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB PnPRrxJ DQJzA qgboLB jRDhIEc',
        'vWZNz Rdw' ],
      [ 'NxE GzKHIV zdw sAVdW ObB PnPRrxJ DQJzA qgboLB jRDhIEc vWZNz',
        'Rdw' ] ]);
    });
});
 
const isSatorSquare = require('../03-IsSatorSquare');

describe ('isSatorSquare tests', () => {
    test("test1", () => {
        expect(isSatorSquare( 
      [ ['K', 'N', 'I', 'T'],         
        ['N', 'O', 'R', 'I'],
        ['I', 'R', '0', 'N'],
        ['T', 'I', 'N', 'K'] ])).toBe(false);
    });

    test("test2", () => {
        expect(isSatorSquare(
       [['W', 'E', 'J', 'x'],
        ['E', 'g', 'b', 'J'],
        ['J', 'b', 'g', 'M'],
        ['x', 'J', 'M', 'W']])).toBe(false);
    });

    test("test3", () => {
        expect(isSatorSquare(
        [['P', 'E', 'R'],
        ['E', 'V', 'E'],
        ['R', 'E', 'P']])).toBe(true);
    });

    test('test4', () => {
        expect(isSatorSquare(
        [['w', 'C', '{', 'r', 'P'],
         ['C', '_', 'J', 'i', 'r'],
         ['{', 'J', 'p', 'q', '{'],
         ['r', 'i', 'q', '_', 'C'],
         ['P', 'r', '{', 'C', 'w']])).toBe(false);
    });

    test('test5', () => {
        expect(isSatorSquare(
      [['K', 'N', 'I', 'T'],       
        ['N', 'O', 'R', 'I'],  
        ['I', 'R', '0', 'N'], 
        ['T', 'I', 'N', 'K']])).toBe(false);
    });
});

const removeChar = require('../04-RemoveFirstAndLastCharacter');

describe("removeChar tests", () => {
beforeAll(() => {
    let str = '';
});

test('test1', () => {
    str = 'eloquent';
    expect(removeChar(str)).toBe('loquen');
});

test('test2', () => {
    expect(removeChar('dp')).toBe('');
});

test('test3', () => {
    str = 'place';
    expect(removeChar(str)).toBe('lac');
});

test('test4', () => {
    expect(removeChar('ooopsss')).toBe('oopss');
});

test('test5', () => {
    expect(removeChar('person')).toBe('erso');
});
});

const countLanguages = require('../05-PrepareTheCountOfLanguages');

describe('countLanguages tests', () => {
    beforeAll(() => {
        let massObj = [];
    })

    beforeEach(() => {
        massObj = [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },];
    });
    test('test1', () => {
        expect(countLanguages(massObj)).toEqual({C: 1});
    });

    test('test2', () => {
        massObj.push({firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'});
        massObj.push({ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' });
        expect(countLanguages(massObj)).toEqual({C: 1, JavaScript: 1, Ruby: 1});
    });
    
    test('test3', () => {
        expect(countLanguages([{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},{"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Clojure"}]
        )).toEqual( { Java: 2, Clojure: 2, JavaScript: 1, Python: 1 });
    });

    test('test4', () => {
        expect(countLanguages([{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"},{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},{"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},{"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},{"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"}])).toEqual({ Java: 1, JavaScript: 2, Python: 4, Ruby: 3 });
    });

    test('test5', () => {
        expect(countLanguages([{"firstName":"Malik","lastName":"J.","country":"Greenland","continent":"Europe","age":19,"language":"Python"},{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Zahra","lastName":"S.","country":"Azerbaijan","continent":"Europe","age":22,"language":"Java"},{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},{"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"}])).toEqual({ Python: 2, Java: 3, JavaScript: 2, Ruby: 1, Clojure: 1, PHP: 1 });
    });
});