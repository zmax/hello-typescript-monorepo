import { sum, Main } from '@beyond/playground';

export function ping(): string {
  const msg: string = 'pong ' + sum(100, 77);
  
  return msg;
}

export { Main }