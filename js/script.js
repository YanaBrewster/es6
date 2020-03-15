console.log('es6');

class Person{
  constructor(name){
    this.personName = name;
  }
  display(){
    return ('Name of the person is ' + this.personName)
  }
}

// Create an instance of personName

let person1 = new Person('Dave');
console.log(person1.display());

// Inheritance
class Citizen extends Person{
  constructor(name, country){
    super(name);
    // super refers to the parent
    this.personCountry = country;
  }
  displayAll(){
    return (this.display() + 'and this person comes from ' + this.personCountry);
  }
}

// instance of Citizen
let person2 = new Citizen ('Smith','Australia');
console.log(person2.displayAll());
