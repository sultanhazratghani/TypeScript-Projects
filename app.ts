import inquirer from "inquirer";

while (true){
const answer = await inquirer.prompt
([
{
    message : "Enter first number",
    type: "number", 
    name: "firstNumber"
},
{
    message: "Enter second number", 
    type: "number",
    name: "secondNumber"
},
{
    message: "Select any one operator to perfom operation", 
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
} 
]);

//conditional statements
if(answer.operator==="Addition")
{
    console.log(`Sum: ${answer.firstNumber+answer.secondNumber}`);
}

else if(answer.operator==="Subtraction")
{
    console.log(`Difference: ${answer.firstNumber+answer.secondNumber}`);
}

else if(answer.operator==="Multiplication")
{    
    console.log(`Product: ${answer.firstNumber*answer.secondNumber}`);
}

else
{    
    console.log(`Quotient:${answer.firstNumber/answer.secondNumber}`);   
}

let x = await inquirer.prompt
([
    { 
        message:"Do you want to try again",
        type: "list",
        name:"option",
        choices:["yes", "no"]
    }
])
 if (x.option==="no")
 {
    console.log("Thanks for using my calculator\n Author:SULTAN\nDate:17th Mar 2024");
    break;
 } 
}