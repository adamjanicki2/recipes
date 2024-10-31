import { Fraction, Food } from "src/types";

const zero = new Fraction(0);

export const foods: Record<string, Food> = {
  "Skim Milk": {
    name: "Skim Milk",
    cpg: new Fraction(90, 244),
  },
  "Rolled Oats": {
    name: "Rolled Oats",
    cpg: new Fraction(153, 41),
  },
  Applesauce: {
    name: "Applesauce",
    cpg: new Fraction(102, 244),
  },
  Salt: {
    name: "Salt",
    cpg: zero,
  },
  "Baking Powder": {
    name: "Baking Powder",
    cpg: zero,
  },
  Cinnamon: {
    name: "Cinnamon",
    cpg: zero,
  },
  "Ground Ginger": {
    name: "Ground Ginger",
    cpg: zero,
  },
  "Maple Syrup": {
    name: "Maple Syrup",
    cpg: new Fraction(52, 20),
  },
  "Vanilla Protein Powder": {
    name: "Vanilla Protein Powder",
    cpg: new Fraction(4),
  },
  "Egg Whites": {
    name: "Egg Whites",
    cpg: new Fraction(24, 46),
  },
  "Pumpkin Puree": {
    name: "Pumpkin Puree",
    cpg: new Fraction(83, 245),
  },
};
