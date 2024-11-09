import { foods } from "src/pantry";
import type { Recipe, Unit } from "src/types/util";

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function routify(str: string) {
  return str.replaceAll(" ", "-").toLowerCase();
}

export function toCelsius(f: number) {
  return Math.floor((f - 32) / 1.8);
}

export const UNITS_NEEDING_PLURALIZATION: readonly Unit[] = ["cup"];

export const sampleRecipe: Recipe = {
  title: "TITLE",
  type: "dinner",
  description: "DESCRIPTION",
  created: new Date("YYYY-MM-DD"),
  ingredients: [
    {
      food: foods.salt,
      quantity: {
        grams: 5,
        imperial: {
          amount: 1,
          unit: "tsp",
        },
      },
    },
  ],
  cookInfo: {
    time: 0,
    temp: 0,
  },
  prepTime: 5,
  directions: ["DIRECTION1"],
  tags: [],
};
