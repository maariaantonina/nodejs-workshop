const fs = require('fs');

const gender = ['M', 'F'];
const females = [
  'Alayna',
  'Jayleen',
  'Macie',
  'Shania',
  'Araceli',
  'Melanie',
  'Cynthia',
  'Lyric',
  'Maria',
  'Elisa',
  'Kailey',
  'Jane',
  'Meadow',
  'Avah',
  'Damaris',
  'Catherine',
  'Ayanna',
  'Yazmin',
  'Anahi',
  'Dominique'
];
const males = [
  'Kaiden',
  'Caden',
  'Craig',
  'Morgan',
  'Carlos',
  'Louis',
  'Jovani',
  'Tucker',
  'Cale',
  'Keaton',
  'Asher',
  'Jace',
  'Jason',
  'Kael',
  'Alfredo',
  'Braydon',
  'Rogelio',
  'Ezequiel',
  'Braylen',
  'Trey'
];
const lastNames = [
  'Dodson',
  'Wagner',
  'Lowe',
  'Schneider',
  'Fields',
  'Fisher',
  'Snyder',
  'Noble',
  'Levine',
  'Mathews',
  'Shah',
  'Davidson',
  'Haas',
  'Tate',
  'Choi',
  'Luna',
  'Hammond',
  'Ochoa',
  'Bradley',
  'Clark'
];
const age = [];
for (let i = 18; i <= 78; i++) {
  age.push(i);
}

function randChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

const people = [];
for (let i = 0; i < 20; i++) {
  let person = {};
  person.gender = randChoice(gender);
  if (person.gender == 'M') {
    person.firstName = randChoice(males);
  } else {
    person.firstName = randChoice(females);
  }
  person.lastName = randChoice(lastNames);
  person.age = randChoice(age);
  person.email = person.firstName + '.' + person.lastName + '@gmail.com';
  people.push(person);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});
