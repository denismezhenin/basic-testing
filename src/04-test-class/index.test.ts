// Uncomment the code below and write your tests
import { getBankAccount } from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const balance = getBankAccount(100).getBalance();
    expect(balance).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      getBankAccount(100).withdraw(120);
    }).toThrow('Insufficient funds: cannot withdraw more than 100');
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => {
      const a = getBankAccount(100);
      const b = getBankAccount(120);
      a.transfer(120, b);
    }).toThrow('Insufficient funds: cannot withdraw more than 100');
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => {
      const a = getBankAccount(100);
      a.transfer(50, a);
    }).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    const deposit = getBankAccount(100).deposit(50);
    const balance = deposit.getBalance();
    expect(balance).toBe(150);
  });

  test('should withdraw money', () => {
    const deposit = getBankAccount(100).withdraw(20);
    const balance = deposit.getBalance();
    expect(balance).toBe(80);
  });

  test('should transfer money', () => {
    const a = getBankAccount(100);
    const b = getBankAccount(120);
    a.transfer(80, b);
    const balance = b.getBalance();
    expect(balance).toBe(200);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const a = getBankAccount(100);
    const balance = await a.fetchBalance();
    expect(balance).not.toBe(101);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const a = getBankAccount(100);
    const balance = await a.fetchBalance();
    expect(balance).not.toBeNull;
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
