let person = {
    firstName: 'orisya',
    lastName: 'men',
    age: 33
}

person.email = 'test@test.ua';
delete person.age;
console.log(person);