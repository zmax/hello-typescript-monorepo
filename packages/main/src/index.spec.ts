import { ping } from '@beyond/foo';

describe('@beyond/main testing', () => {
  
  it('ping pong', () => {
    expect(ping()).toBe('pong 177');
  });
});