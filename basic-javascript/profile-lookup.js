// setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  // telusuri tiap-tiap kontak
  for (let i = 0; i < contacts.length; i++) {
    // console.log(contacts[i]);
    // console.log(contacts.length);
    // console.log(contacts[i].hasOwnProperty(prop));

    // jika arg name sudah ada di contact firstName
    if (name === contacts[i].firstName) {
      //jika prop sudah ada, maka return value dari prop
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      // jika prop tidak ada, maka return string "No such property"
      else {
        return 'No such property';
      }
    }
    //jika arg name tidak ada, maka return string "No such contact"
    else if (i == contacts.length - 1) {
      return 'No such contact';
    }
  }
}
console.log(lookUpProfile('Akira', 'likes'));

// lookUpProfile("Kristian", "lastName") //should return the string Vos

// lookUpProfile("Sherlock", "likes") //should return ["Intriguing Cases", "Violin"]

// lookUpProfile("Harry", "likes") //should return an array

// lookUpProfile("Bob", "number") //should return the string No such contact

// lookUpProfile("Bob", "potato") //should return the string No such contact

// lookUpProfile("Akira", "address") //should return the string No such property
