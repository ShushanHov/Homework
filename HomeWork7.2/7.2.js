class Account{
    constructor(id,name,balance){
    this._id=id;
    this._name=name;
    this._balance=balance;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }
    get balance(){
        return this._balance;
    }
    set balance(value){
        this._balance=value;
    }
    get id(){
        return this._id;
    }
    set id(value){
        this._id=value;
    }
    credit(amount){
        this._balance+=amount;
        return  this._balance;
    }
    debit(amount){
        if (amount>this._balance) return `Amount exceeded balance`;
        else {
            this._balance-=amount;
            return this._balance;
        }
    }
    transferTo(anotherAccount,amount){
        if (amount>this._balance) return `Amount exceeded balance`;
        else {
            this._balance-=amount;
            anotherAccount=anotherAccount +amount;
            console.log(anotherAccount);
            return this._balance;
        }
    }
    identifyAccounts(accountFirst, accountSecond){
        if (accountFirst._id===accountSecond._id && accountFirst._name===accountSecond._name
            && accountFirst._balance==accountSecond._balance){
                return 'Two accounts are the same';
        }
        else return `Two accounts are different`;
    }
    toString(){
        return `This accounts name is ${this._name}`;
    }
}