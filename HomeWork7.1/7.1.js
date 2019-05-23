class Author{
    constructor(name,email,gender){
        this._name=name;
        this._email=email;
        this._gender=gender;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email=value;
    }
    get gender(){
        return this._gender;
    }
    set gender(value){
        this._gender=value;
    }
    toString(){
        return `This ${this._name}'s email is ${this._email} `;
    }
}
class Book extends Author{
    constructor (title,name,price,quantity){
        super(name);
        this._title=title;
        this._price=price;
        this._quantity=quantity;
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title=value;
    }
    get price(){
        return this._price;
    }
    set price(value){
        this._price=value;
    }
    get quantity(){
        return this._quantity;
    }
    set quantity(value){
        this._quantity=value;
    }
    getProfit(){
        if (this.price>0 && this.quantity>0) return `Profit after sale would be ` +(this.price*this.quantity)
        else return `Invalid price or quantity`;
    }
    toString(){
        return `This book: ${this._title} was writen by ${name}`;
    }
}