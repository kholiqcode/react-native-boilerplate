import { isEmpty } from '../generic';

describe('isEmpty test', () => {
  it('value is null', () => {
    expect(isEmpty(null)).toBe(true);
  });
  it('value is undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });
  it('value is empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
  it('value is empty array', () => {
    expect(isEmpty([])).toBe(true);
  });
});
