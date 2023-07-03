// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  // [1, 2,  Action.Add, 3]
  [4, 3, Action.Subtract, 1],
  [4, 3, Action.Multiply, 12],
  [10, 5, Action.Divide, 2],
  [2, 3, Action.Exponentiate, 8],
  [2, 3, '++', null],
  ['2', 3, Action.Exponentiate, null],
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'validateEmail(%s) should be %s',
    (a, b, action, expected) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
