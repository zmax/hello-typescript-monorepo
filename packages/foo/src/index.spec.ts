import { ping } from "./index";

describe('@beyond/foo testing', () => {
  it('should works', () => {
    expect(ping()).toBe('pong 177');
  });
});