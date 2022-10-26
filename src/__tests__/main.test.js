import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const mainJs = fs.readFileSync(path.resolve(__dirname, "../main.js"), "utf8");

let dom, container;
beforeEach(async () => {
  // Constructing a new JSDOM with this option is the key
  // to getting the code in the script tag to execute.
  // This is indeed dangerous and should only be done with trusted content.
  // https://github.com/jsdom/jsdom#executing-scripts
  dom = new JSDOM(`<div id="app" />`, {
    runScripts: "dangerously",
  });
  container = dom.window.document.body;
  const scriptElement = dom.window.document.createElement("script");
  scriptElement.textContent = mainJs;
  container.appendChild(scriptElement);
});

// Example
test("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});
