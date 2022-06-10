import { heightPercentageToDP, widthPercentageToDP } from '../normalize';

describe('normalize test', () => {
  it('return number', () => {
    expect(widthPercentageToDP('10')).not.toBeNaN();
  });

  it('return number', () => {
    expect(heightPercentageToDP('10')).not.toBeNaN();
  });
});
