// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// Do I need ot add role into the constructor parameters???
class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
        return this.officeNumber;
    };
    getRole() {
        console.log(`Role: Manager`);
        return ("Manager");
    };
};

module.exports = Manager