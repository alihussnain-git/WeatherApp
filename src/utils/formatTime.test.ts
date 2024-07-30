import {formatTime} from './formatTime';

describe('formatTime', () => {
  it('formats time when hours and minutes are single digits', () => {
    const timestamp = 1622505600; // Replace with your timestamp
    const formattedTime = formatTime(timestamp);
    expect(formattedTime).toEqual('02:00'); // Replace with your expected output
  });

  it('formats time when hours and minutes are double digits', () => {
    const timestamp = 1622548800; // Replace with your timestamp
    const formattedTime = formatTime(timestamp);
    expect(formattedTime).toEqual('14:00'); // Replace with your expected output
  });
});
