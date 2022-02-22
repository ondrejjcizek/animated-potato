class Course{
    #price;

    constructor(courseTitle, coursePrice, courseLength) {
        this.title = courseTitle;
        this.price = coursePrice;
        this.length = courseLength;
    }

    get price() {
        return '$' + this.#price;
    }

    set price(value) {
        if(value < 0) {
            throw 'Invalid value!';
        }
        this.#price = value;
    }

    calculateValue() {
        return this.length/this.#price;
    }

    printSummary() {
        console.log(`
        Title: ${this.title}
        Length: ${this.length}
        Price: ${this.price}
        `);
    }
}

const jsCourse = new Course('JavaScript', 50, 44);
const reactCourse = new Course('React JS', 50, 36);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
        super(title, length, price);
        this.numOfExercises = exercisesCount;
    }
}


const angularCourse = new PracticalCourse('Angular', 30, 50, 10);

console.log(angularCourse);
angularCourse.printSummary();

class theoreticalCourse extends Course {
    publish() {
        console.log('Publishing...')
    }
}

const flutterCourse = new theoreticalCourse('Flutter', 50, 48);

flutterCourse.printSummary();
flutterCourse.publish();