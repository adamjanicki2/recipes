import Fuse from "fuse.js";
import { recipes } from "src/data";
import { Recipe } from "src/types/util";

const fuse = new Fuse(recipes, {
  keys: ["title", "tags", "type"],
});

export default function searchRecipes(query: string): Recipe[] {
  const matches = fuse.search(query);
  return matches.map(({ item }) => item);
}
