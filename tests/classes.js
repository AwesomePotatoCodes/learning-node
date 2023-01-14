class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Item {
  constructor(name, material) {
    this.name = name;
    this.material = material;
  }
}

const John = new Person('John Doe', '21');
console.log(`John is ${John.age} years old.`);
console.log(`John's full name is ${John.name}.`);

let Car1 = new Item('Toyota', 'Metal');
console.log(`John owns a ${Car1.name} made of ${Car1.material}.`);

let Car2 = new Item('Lincoln', 'Metal');
console.log(`John is buying a new ${Car2.name} car made of ${Car2.material}`);
