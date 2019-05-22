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
        return `This is person with name - ${this.firstName} and last name -${this.lastName}`;
    }
    
}
class Student extends Person{
    constructor(firstName, lastName,gender, age, programs, year, fee){
        super(firstName, lastName,gender, age);
        this.programs=programs;
        this.year=year;
        this.fee=fee;
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
}
class Teacher extends Person{
    constructor(firstName,lastName,gender,age,programs,pay){
        super(firstName,lastName,gender,age);
        this.programs=programs;
        this.pay=pay;
    }
}