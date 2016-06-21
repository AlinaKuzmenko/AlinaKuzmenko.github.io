function Human() {
    this.name = 'Unknown';
    this.age = 'Unknown';
    this.gender = 'Unknown';
    this.height = 'Unknown';
    this.weight = 'Unknown';
}

function Worker() {
    this.company = 'Ciklum';
    this.salary = 'Unknown';
    this.work = function () {
        return 'work!!!';
    }
}

function Student() {
    this.course = 'GoFrontend';
    this.scholarship = 'Unknown';
    this.watch = function () {
        return 'watch TV shows!!!';
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Alina = new Worker();

Alina.name = 'Alina';
Alina.salary = '$2000';
console.log(Alina);
console.log('Alina.age -----', Alina.age);
console.log('Alina.gender -----', Alina.gender);

var Anastasia = new Worker();
Anastasia.name = 'Anastasia';
Anastasia.salary = '$2000';
console.log(Anastasia);
console.log('Anastasia.age -----', Anastasia.age);
console.log('Anastasia.gender -----', Anastasia.gender);

var Irina = new Student();
Irina.name = 'Irina';
Irina.scholarship = '$100';
console.log(Irina);
console.log('Irina.age -----', Irina.age);
console.log('Irina.gender -----', Irina.gender);

var Maks = new Student();
Maks.age = 18;
Maks.scholarship = '$100';
console.log(Maks);
console.log('Maks.age -----', Maks.age);
console.log('Maks.gender -----', Maks.gender);
