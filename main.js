const inquirer = require("inquirer");
const Manager = require("./team/manager.js");
const Engineer = require("./team/engineer.js");
const Intern = require("./team/intern.js");
const Block = require("./team/block.js");
const fs = require("fs");
const open = require("open");

const team = {
  manager: '',
  engineers: [],
  interns: [],
};

function initalize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Manager name?`
    },
    {
      type: "input",
      name: "id",
      message: `Manager ID?`
    },
    {
      type: "input",
      name: "email",
      message: `Manager email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `Manager office number?`,
    },
  ])
}
function buildTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"Next team member to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `Engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `Engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `Engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `Engineer's GitHub??`
        },
      ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.engineers.push(engineer.getHTML())
        buildTeam();
      })
    }
    if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `Intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `Intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `Intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `Intern's school?`
        }
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.interns.push(intern.getHTML());
        buildTeam();
      })
    }

    return generateHTML();
  });
}
function generateHTML(){
  let finalHTML = '';
  finalHTML += Block.header();
  finalHTML += team.manager;
  finalHTML += team.engineers.join('\n');
  finalHTML += team.interns.join('\n');
  fs.writeFile("generate.html",finalHTML, (err) => {
    if(err) {
      throw err;
    };
    console.log("Your team has been constructed!");
  });
  open("generate.html");
  };


initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  team.manager = manager.getHTML();
  buildTeam();
});

