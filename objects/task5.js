let users = [
  {
    name: 'Ira',
    email: 'ira@test.ua',
    age: 33,
    city: 'Cherkasy'
  },
  {
    name: 'Oleh',
    email: 'oleh@test.ua',
    age: 28,
    isActive: true
  },
  {
    name: 'Anna',
    email: 'anna@test.ua',
    age: 22,
    courses: ['QA', 'JavaScript']
  }
];


for (let user of users) {
  const {...props} = user;
  console.log(props);
}