const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

let person = {
  'first-name': 'Ondrej',
  age: 25,
  hobbies: ['Gaming', 'Running'],
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello',
};

delete person.age;
// person.age = null;
// person.age = undefined;
person.isAdmin = true;

console.log(person['first-name']);
console.log(person[1.5]);
console.log(person);
