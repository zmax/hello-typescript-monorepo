export default class DefaultTest {}

export class Test {}

export class Main {
  sayHello(...args: any[]): void {
    console.log('Hello World! ');
  }
  say(msg: string): void {
    console.log(msg);
  }
}