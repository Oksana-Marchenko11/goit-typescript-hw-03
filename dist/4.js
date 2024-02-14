// class Key {
//   private signature: number;
//   constructor() {
//     this.signature = Math.random();
//   }
//   getSignature(): number {
//     return this.signature;
//   }
// }
// class Person {
//   private key: Key;
//   constructor(key: Key) {
//     this.key;
//   }
// }
// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);
// export {};
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    // Конструктор класу Dog, який викликає конструктор Animal
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
// Створення об'єкта класу Dog
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog);
//# sourceMappingURL=4.js.map