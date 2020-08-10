// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// Do I need to add role into the constructor parameters???
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        console.log(`School: ${this.school}`);
        return this.school;
    };
    getRole() {
        console.log(`Role: Intern`);
        return ("Intern");
    };
};

module.exports = Intern