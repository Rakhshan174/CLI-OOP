#! usr/bin/env node

// OOP Introduction Explained with A TypeScript console Aplliction



//  Start code


import inquirer from "inquirer"
import chalk from "chalk"

// create class

class Person{
    private _personality: string;
constructor(){
    this._personality ="Mystery";
}
// user iput

userInput(input: string){
    //  if else statments

    if(input.includes ("talk to others about your self openly")){
        this._personality = "talk happly"; 
    }else if (input.includes("keep your words to yourself")){
        this._personality = "talk rude";
    }
}
    //   return function
    get personality(){
        return this._personality
    }
    

}

//  create object

class Main{
    public async main(){
        // await called out
const ans = await inquirer.prompt({
    // object
    type : "list",
    name: "choice",
    message: chalk.yellow("tell your behaviour?"),
    choices: [
        "1: talk to others about my self.",
        "2: keep quite and dont ask questions"
    ]

})
    //  create a personal class
    let myPerson = new Person()

    myPerson.userInput(ans.choice);

    //  out response
    console.log(`you are ${myPerson.personality}`);


    

    }
}


const myobject = new Main();
myobject.main();
