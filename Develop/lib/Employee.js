// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        if (!name) {
            throw new Error("You must enter a name.");
        }
        if (!id) {
            throw new Error("You must enter your ID number.");
        }
        if (!email) {
            throw new Error("You must enter an email address.");
        }
        if (!role) {
            return ("Employee")
        };
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
        return ("Employee");
    };

    getRole() {
        console.log(`Name: ${this.role}`);
        return this.role;
    };
};

module.exports = Employee