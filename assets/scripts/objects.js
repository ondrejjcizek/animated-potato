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
};

delete person.age;
// person.age = null;
// person.age = undefined;
person.isAdmin = true;

console.log(person['first-name']);
