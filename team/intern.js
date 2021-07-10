const Employee = require("./employee.js");
const Block = require("./block.js")

class Intern extends Employee {
    constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        return Block.intern(this);
    } 
 }

 module.exports = Intern;