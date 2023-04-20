const { validSpacing } = require("../src/index");

describe("Lesson 1 valid spacing", () => {
  test("should be able return true a valid string", () => {
    const valid_spacing = "Hello world";
    expect(validSpacing(valid_spacing)).toBe(true);
  });

  test("should be able to return true when the string starts with a space", () => {
    const valid_spacing = " Hello word";
    expect(validSpacing(valid_spacing)).toBe(false);
  });

  test("should be able to return true when the string ends with a space", () => {
    const valid_spacing = "Hello word ";
    expect(validSpacing(valid_spacing)).toBe(false);
  });

  test("should be able to return true when the string has a double space between", () => {
    const valid_spacing = "Hello  word";
    expect(validSpacing(valid_spacing)).toBe(false);
  });
});
