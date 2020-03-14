export default class Student {

  public name: string = '';
  private _age: number = 0;

  constructor();
  constructor(_name: string);
  constructor(_age: number);
  constructor(args: string|number|undefined = undefined) {
    if(typeof args === 'string') {
      this.name = args;
    } else if (typeof args === 'number') {
      this._age = args
    } else {
      this.name = 'Default Name';
      this._age = 18;
    }
  }

  get age(): number {
    return this._age;
  }

}