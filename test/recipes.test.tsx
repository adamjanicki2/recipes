import "@testing-library/jest-dom";
import { recipes } from "../src/data";

describe("recipes wholesome", () => {
  it("should have non-zero length", () => {
    expect(recipes.length).toBeGreaterThan(0);
  });

  it("should only use template replacers if the value is set", () => {
    recipes.forEach((recipe) => {
      const { cookInfo } = recipe;
      const temp = cookInfo?.temp;
      const time = cookInfo?.time;
      recipe.directions.forEach((direction) => {
        const tempReplacer = direction.includes("__TEMP__");
        const timeReplacer = direction.includes("__COOK_TIME__");
        expect(tempReplacer && !temp).toBeFalsy();
        expect(timeReplacer && !time).toBeFalsy();
      });
    });
  });

  it("directions should include no newlines", () => {
    recipes.forEach((recipe) => {
      recipe.directions.forEach((direction) => {
        expect(direction.includes("\n")).toBeFalsy();
      });
    });
  });
});