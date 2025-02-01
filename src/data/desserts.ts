import type { Recipe } from "src/types/util";
import { foods } from "src/pantry";
import { oneHalf, twoThirds } from "src/types/Fraction";

export const desserts: readonly Recipe[] = [
  {
    title: "Lemon Blueberry Muffins",
    type: "dessert",
    description:
      "Lemon blueberry is one of my favorite types of muffins. I made this recipe a little bit healthier by adding protein and whole grains in the mix.",
    created: new Date("2025-01-29"),
    ingredients: [
      {
        food: foods.kodiakMix,
        quantity: {
          grams: 80,
          imperial: {
            amount: twoThirds,
            unit: "cup",
          },
        },
      },
      {
        food: foods.proteinPowder,
        quantity: {
          grams: 20,
          imperial: {
            amount: 2,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.bakingPowder,
        quantity: {
          grams: 6,
          imperial: {
            amount: 1,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.cinnamon,
        quantity: {
          grams: 4,
          imperial: {
            amount: oneHalf,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.vanillaExtract,
        quantity: {
          grams: 4,
          imperial: {
            amount: oneHalf,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.syrup,
        quantity: {
          grams: 15,
          imperial: {
            amount: 1,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.eggWhites,
        quantity: {
          grams: 60,
          imperial: {
            amount: 4,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.skimMilk,
        quantity: {
          grams: 100,
          imperial: {
            amount: oneHalf,
            unit: "cup",
          },
        },
      },
      {
        food: foods.blueberries,
        quantity: {
          grams: 120,
          imperial: {
            amount: 1,
            unit: "cup",
          },
        },
      },
      {
        food: foods.lemonJuice,
        quantity: {
          grams: 10,
          imperial: {
            amount: 1,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.oliveOil,
        quantity: {
          grams: 14,
          imperial: {
            amount: 1,
            unit: "tbsp",
          },
        },
      },
    ],
    cookInfo: {
      time: 22,
      temp: 350,
    },
    prepTime: 10,
    directions: [
      "Preheat oven to __TEMP__. Get your muffin tin of choice and properly grease the muffin cups with a little oil. Get a medium bowl for mixing ingredients.",
      "Lightly mix together all dry ingredients. No need to be thorough.",
      "Add in all wet ingredients and mix to combined. Unlike pancake batter, we don't want any lumps in our muffins, so we want to mix thoroughly until no lumps are left standing.",
      "Bake for __COOK_TIME__ minutes, or until the top looks browned enough. Let cool for a a few minutes before attempting to remove muffins.",
    ],
    tags: ["protein"],
  },
];
