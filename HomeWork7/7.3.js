class Person{
    constructor (firstName, lastName, gender,age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._gender=gender;
        this._age=age;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName=value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName=value;
    }
    get gender(){
        return this._gender;
    }
    set gender(value){
        this._gender=value;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age=value;
    }
    toString(){
        return `This is a person with name - ${this._firstName} and last name - ${this._lastName}`;
    }
    
}
class Student extends Person{
    constructor(firstName, lastName,gender, age, programs, year, fee){
        super(firstName, lastName,gender, age);
        this._programs=programs;
        this._year=year;
        this._fee=fee;
    }
    get programs(){
        return this._programs;
    }
    set programs (value){
        this._programs=value;
    }
    get year (){
        return this._year;
    }
    set year(value){
        this._year=value;
    }
    get fee(){
        return this._fee;
    }
    set fee(value){
        this._fee=value;
    }
    passExam(program,grade){
        if (this.programs.indexOf(program)===-1) return 'Invalid Program';
        if (grade>=50){
            this.programs.splice(this.programs.indexOf(program),1);
            if (!this.programs.length){
                this.year++;
            }
        }
    }
    toString(){
        return `This student studies in  ${this._year} year`;
    }
}
class Teacher extends Person{
    constructor(firstName,lastName,gender,age,program,pay){
        super(firstName,lastName,gender,age);
        this._program=program;
        this._pay=pay;
    }
    get program(){
        return this._program;
    }
    set program(value){
        this._program=value;
    }
    get pay(){
        return this._pay;
    }
    set pay(value){
        this._pay=value;
    }
    toString (){
        return `This Teacher's subject is ${this._program}`;
    }
}