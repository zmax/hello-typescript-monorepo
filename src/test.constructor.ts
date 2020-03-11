export default class Testing {
    public name:string = 'testing';
    private age:number = 0;

    constructor();
    constructor(_name:string);
    constructor(_age:number);
    constructor(args:string|number|undefined = undefined) {
        if(typeof(args) == 'string') {
            this.name = args;
        } else if (typeof(args) == 'number') {
            this.age = args
        } else {

        }
        console.log(this.name);
    }

}

let testing = new Testing('Hello World');
