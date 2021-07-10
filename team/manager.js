const Employee = require("./employee.js");
const Block = require("./block.js")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return Block.manager(this);
    } 
 };

 module.exports = Manager;