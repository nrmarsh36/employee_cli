// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        console.log(`Name: ${this.name}`);
        return this.name;
    };

    getId() {
        console.log(`Name: ${this.id}`);
        return this.id;
    };

    getEmail() {
        console.log(`Name: ${this.email}`);
        return this.email;
    };

    getRole() {
        console.log(`Name: ${this.role}`);
        return ("Employee");
    };
};

module.exports = Employee