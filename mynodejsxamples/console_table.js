function Person(name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;

}

let person1 = new Person("P1", 30, "New Delhi");
let person2 = new Person("P2", 28, "Patna");
let person3 = new Person("P3", 35, "Mumbai");

console.table([person1, person2, person3]);

person1 = new Person("P4", "30", "New Delhi");
person2 = new Person("P5", "28", "Patna");
person3 = new Person("P6", "35", "Mumbai");

console.log('----------------------------------------------');

console.table([person1, person2, person3]);