// Defining the SVG class with text and color functions
export class SVG {
  constructor() {
    this.textE = "";
    this.shapeE = "";
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeE}${this.textE}</svg>`;
  }

  setText(text, textColor) {
    this.textE = `<text x='150' y='120' text-anchor='middle' font-size='50' fill='${textColor}'>${text}</text>`;
  }

  setShape(shape) {
    this.shapeE = shape.render();
  }
}
