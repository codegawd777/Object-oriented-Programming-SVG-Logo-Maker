const inquirer = require("inquirer");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to draw?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "characters",
      message: "What characters would you like to draw?",
    },

    {
      type: "input",
      name: "textcolor",
      message: "What color would you like the text to be?",
    },

    {
      type: "input",
      name: "shapecolor",
      message: "What color would you like the shape to be?",
    }])
  .then((answers) => {
    console.log(answers);
    let shape;
    if (answers.shape === "Circle") {
      shape = new Circle(answers.characters, answers.textcolor, answers.shapecolor);
    } else if (answers.shape === "Triangle") {
      shape = new Triangle(answers.characters, answers.textcolor, answers.shapecolor);
    } else if (answers.shape === "Square") {
      shape = new Square(answers.characters, answers.textcolor, answers.shapecolor);
    }
    fs.writeFile("./examples/logo.svg", shape.render(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    })
