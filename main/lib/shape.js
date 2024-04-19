// Defining the shape class with a color function
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

// Circle class
export class Circle extends Shape {
  render() {
    //Returning the circle element with color
    return `<circle cx='150' cy='100' r='80' fill='${this.color}'/>`;
  }
}

// Triangle class
export class Triangle extends Shape {
  render() {
    //Returning the triangle element with color
    return `<polygon points='50, 180 150, 20 250, 180' fill='${this.color}'/>`;
  }
}

// Square class
export class Square extends Shape {
  render() {
    //Returning the Square element with color
    return `<rect x='70' y='20' width='160' height='160' fill='${this.color}'/>`;
  }
}
