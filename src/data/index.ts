import { breakfasts } from "src/data/breakfasts";
import { lunches } from "src/data/lunches";
import { dinners } from "src/data/dinners";
import { desserts } from "src/data/desserts";
import { snacks } from "src/data/snacks";
import { drinks } from "src/data/drinks";
import { Recipe } from "src/types/util";

export const recipes: readonly Recipe[] = [
  ...breakfasts,
  ...lunches,
  ...dinners,
  ...desserts,
  ...snacks,
  ...drinks,
];
