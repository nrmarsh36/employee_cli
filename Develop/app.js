const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const outPath = path.join

const allEmployees = [];
const roleOptions = ["Manager", "Engineer", "Intern"];
const questions = [
    {
        type: "input",
        name: "employee_name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "employee_id",
        message: "What is their ID number?"
    },
    {
        type: "input",
        name: "employee_email",
        message: "What is their email address?"
    },
    {
        type: "list",
        name: "employee_role",
        message: "What is the employee's role?",
        choices: roleOptions
    },
    {
        type: "input",
        name: "engineer_github",
        message: "What is the engineer's GitHub profile?"
    },
    {
        type: "input",
        name: "manager_office",
        message: "What is this manager's office number?"
    },
    {
        type: "input",
        name: "intern_school",
        message: "What school does this intern attend?"
    }
];

function employeeCLI() {
    inquirer
    .prompt(questions).then(val => {
        if (val.type === "Engineer") {
            allEmployees.push(new Engineer(val.employee_name, val.employee_id. val.email, val.engineer_github));
        } else if (val.type === "Manager") {
            allEmployees.push(new Manager(val.employee_name, val.employee_id. val.email, val.manager_office));
        } else if (val.type === "Intern") {
            allEmployees.push(new Intern(val.employee_name, val.employee_id. val.email, val.intern_school));
        };
        employeeCLI();
    }).then(fs.writeFile(outPath, render(allEmployees)))
};
employeeCLI();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

