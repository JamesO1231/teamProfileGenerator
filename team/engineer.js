const Employee = require("./employee.js");
const Block = require("./block.js");

class Engineer extends Employee {
    constructor(name,id,email,github){
    super(name,id,email)
    this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return Block.engineer(this);
    }       
    }


 module.exports = Engineer;