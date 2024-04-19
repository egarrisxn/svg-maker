// Importing this class from the SVG file
import { SVG } from "./svg";

//Testing to see a SVG with text and a shape
describe("SVG", () => {
  test("render method should return SVG string with text and shape", () => {
    const svg = new SVG();
    svg.setText("SVG", "black");
    svg.setShape({
      render: () => '<circle cx="150" cy="100" r="80" fill="red" />',
    });

    const expectedSvg =
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="red" /><text x=\'150\' y=\'120\' text-anchor=\'middle\' font-size=\'50\' fill=\'black\'>SVG</text></svg>';
    const actualSvg = svg.render();

    expect(actualSvg).toEqual(expectedSvg);
  });
});
