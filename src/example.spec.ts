import Student from './fixtures/classes';
import DefaultTest, { Main, Test, Test as Test2 } from './fixtures/modules';
import { sum } from './fixtures/functions';

describe('typescript base testing', () => {
  
  it('sum() 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('template strings and string interpolation testing', () => {
    let a: string = `World!`;
    let b: string = `Hello ${a}`;
    expect(b).toBe('Hello World!');
  });

  it('array testing', () => {
    let listA: number[] = [1, 2, 3];
    let listB: Array<number> = [1, 2, 3];
    expect(listA).toEqual(listB);
  });

  it('tuple testing', () => {
    let tuple: [number, string] = [1, 'test'];
    expect(tuple[0]).toBe(1);
    expect(tuple[1]).toBe('test');
  });

  it('enum testing ', () => {
    enum Color {Red, Green=2, Blue}
    let c: Color = Color.Red;
    expect(c).toBe(0);
    let c2: Color = Color.Blue;
    expect(c2).toBe(3);
  });

  it('void testing', () => {
    let unusable: void = undefined;
    let voidVar: void;
    let nullVar: any = null;
    let undifineVar: undefined = undefined;

    expect(unusable).toBeUndefined();
    expect(voidVar).toBeUndefined();
    expect(nullVar).toBeNull();
    expect(undifineVar).toBeUndefined();
  });

  it('class constructor', () => {
    // constructor arg is string
    let test = new Student('Hello');
    expect(test.name).toBe('Hello');
    // constructor arg is number
    let test2 = new Student(21);
    expect(test2.age).toBe(21);
    // defalut properties checking
    let test3 = new Student();
    expect(test3.name).toBe('Default Name');
    expect(test3.age).toBe(18);
  });

  it('module testing', () => {
    let m = new Main();
    let t = new Test();
    let t2 = new Test2();
    let t3 = new DefaultTest();
    expect(m instanceof Main).toBeTruthy();
    expect(t instanceof Test2).toBeTruthy();
    expect(t2 instanceof Test).toBeTruthy();
    expect(t3 instanceof DefaultTest).toBeTruthy();
  });

});