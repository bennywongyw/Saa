var person = {
    name:"BobSSSS",
    greet:function() {
        console.log(`Hi my mane is ${this.name}`);
    }
};
person.greet();

person['last name'] = 'Smith';

console.log(person['last name']);
console.log(person.name);
console.log(person['name']);