// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const res = resolveValue(1)
    expect(res).toBe(1);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // const res = throwError("error")
    expect(() => {
      throwError("23")
    }).toThrow("23");
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throwError()
    }).toThrow("Oops!");
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => {
      throwCustomError()
    }).toThrow("This is my awesome custom error!");
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(async () => {
      await rejectCustomError()
    }).toThrow("This is my awesome custom erro2r!");
  });
});
describe('MyAwesomeError', () => {
  test('should reject custom error', async () => {
    expect(async () => {
     new MyAwesomeError()
    }).toThrow("This is my awesome custom error!");
  });
});
