#! /usr/bin/env node
import inquire from "inquirer";
const answer = await inquire.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter Sentence/paragraph for word counting:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`your sentence/paragraph words count is ${word.length}`);
