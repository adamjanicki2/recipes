import "@testing-library/jest-dom";
import searchRecipes from "../src/data/search";

describe("searchRecipes", () => {
  it("returns no matches for empty query", () => {
    expect(searchRecipes("")).toHaveLength(0);
  });

  it("returns no matches for random non-empty query", () => {
    expect(searchRecipes("abcdefg")).toHaveLength(0);
  });

  it("returns matches for partial title", () => {
    expect(searchRecipes("oats").length).toBeGreaterThanOrEqual(2);
  });

  it("returns matches for tags", () => {
    expect(searchRecipes("protein").length).toBeGreaterThanOrEqual(2);
  });

  it("returns matches for type", () => {
    expect(searchRecipes("breakfasts").length).toBeGreaterThanOrEqual(2);
  });
});
