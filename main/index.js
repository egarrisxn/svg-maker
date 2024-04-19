import inquirer from "inquirer";
import { writeFile } from "fs";
import { SVG } from "./lib/svg.js";
import { Circle, Triangle, Square } from "./lib/shape.js";

// Writing data to the file
function writeToFile(fileName, svg) {
  writeFile(fileName, svg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("logo.svg has been generated!");
    }
  });
}

// Defining a CLI class for user interaction
class CLI {
  run() {
    return (
      inquirer
        .prompt([
          // Text Prompt
          {
            type: "input",
            message: "Choose your text. (Max three characters)",
            name: "text",
          },
          // Text color prompt
          {
            type: "input",
            message:
              "Choose text color. (Enter color keyword or hexadecimal number)",
            name: "textColor",
          },
          // Shape prompt
          {
            type: "list",
            message: "Choose your shape.",
            choices: ["Circle", "Triangle", "Square"],
            name: "shape",
          },
          // Shape color prompt
          {
            type: "input",
            message:
              "Choose shape color (Enter color keyword or hexadecimal number)",
            name: "shapeColor",
          },
        ])
        // Handle user inputs
        .then((prompts) => {
          if (prompts.text.length > 3) {
            console.log("Cannot exceed three letters.");
            this.run(); // Recursively call `run()` if text exceeds three characters
          } else {
            // Create SVG object
            let svg = new SVG();
            svg.setText(prompts.text, prompts.textColor);

            // Create shape object based on user choice
            let shape;
            if (prompts.shape === "Circle") {
              shape = new Circle();
              svg.setShape(shape);
              svg.shapeE += `<circle cx='150' cy='110' r='80' fill='${prompts.shapeColor}'/>`;
            } else if (prompts.shape === "Triangle") {
              shape = new Triangle();
              svg.setShape(shape);
              svg.shapeE += `<polygon points='150, 18 244, 182 56, 182' fill='${prompts.shapeColor}'/>`;
            } else {
              shape = new Square();
              svg.setShape(shape);
              svg.shapeE += `<rect x='90' y='40' width='160' height='160' fill='${prompts.shapeColor}'/>`;
            }

            // Render and write SVG to file
            writeToFile("outcome/logo.svg", svg.render());
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        })
    );
  }
}

// Initialize CLI and run
const cli = new CLI();
cli.run();
