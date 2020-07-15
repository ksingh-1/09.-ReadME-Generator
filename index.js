const fs=require("fs");
const inquirer=require("inquirer");
const axios=require("axios");
const util=require("util");
const generateMarkdown=require("./Utils/generateMarkdown.js");
const writeFileAsync=util.promisify(fs.writeFile);

const questions=[
    {
        type: "input",
        name: "Username",
        message:"What Is Your Username?",
        default: () => {
            return "ksingh-1";
        },
    },
    {
        type: "input",
        name: "Title",
        message: "What Is The Name Of The Project?",
    },
    {
        type: "input",
        name: "Description",
        message: "What Is This Project About?",
    },
    {
        type: "input",
        name: "Install",
        message:"How do you install your software?",
        default: () => {
            return "npm install";
        },
    },
    {
        type: "list",
        name: "License",
        message:"Project Licensed By:",
        choices: ["Apache 2.0", "GPL 3.0", "MIT", "ISC", "None"],
    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use your software?",
        default: () => {
            return "node index.js";
        },
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who Worked On This Project?",
        default: () => {
            return "Kulpreet Singh";
        },
    },
    {
        type: "input",
        name: "Test",
        message: "How do you test your project?",
        default: () => {
            return "npm run test";
        },
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?",
        default: () => {
            return "kulpreet.s18@gmail.com";
        },
    },
];

// function writeToFile (fileName, data){
//     fs.writeFile(fileName, data, function(err){
//         if (err) throw err
//     });
// }



function promptUser() {
    return inquirer.prompt(questions);
}

function avatarQuery(data) {
    const queryURL=`https://api.github.com/users/${data.Username}`;
    
    return axios.get(queryURL).then((response) => {
        const imgURL=response.data.avatar_url;
        return imgURL;
    });
}
async function init() {
    console.log("ReadMe Generator Online");

    try {
        const data=await promptUser();
        const imgURL=await avatarQuery(data);
        
        const md=generateMarkdown(data, imgURL);
        await writeFileAsync("ReadME.md", md);
        console.log("ReadME file generated");
    } catch (err) {
        console.log(err);
    }
}

init();