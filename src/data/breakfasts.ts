import { oneEighth, oneFourth, oneHalf, twoThirds } from "src/types/Fraction";
import { foods } from "src/pantry";
import type { Recipe } from "src/types/util";

export const breakfasts: readonly Recipe[] = [
  {
    title: "Pumpkin Baked Oats",
    type: "breakfast",
    description:
      "Loosely based on a the flavor profile of pumpkin muffins, this is a great healthy dessert option during the Fall season.",
    created: new Date("2024-10-28"),
    ingredients: [
      {
        food: foods.oats,
        quantity: {
          grams: 80,
          imperial: {
            amount: 1,
            unit: "cup",
          },
        },
      },
      {
        food: foods.proteinPowder,
        quantity: {
          grams: 25,
          imperial: {
            amount: 2,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.bakingPowder,
        quantity: {
          grams: 3,
          imperial: {
            amount: oneHalf,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.salt,
        quantity: {
          grams: 1,
          imperial: {
            amount: oneEighth,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.cinnamon,
        quantity: {
          grams: 3,
          imperial: {
            amount: oneHalf,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.groundGinger,
        quantity: {
          grams: 2,
          imperial: {
            amount: oneFourth,
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
          grams: 155,
          imperial: {
            amount: twoThirds,
            unit: "cup",
          },
        },
      },
      {
        food: foods.pumpkin,
        quantity: {
          grams: 120,
          imperial: {
            amount: oneHalf,
            unit: "cup",
          },
        },
      },
    ],
    cookInfo: {
      time: 30,
      temp: 375,
    },
    prepTime: 5,
    directions: [
      "Preheat oven to __TEMP__. Get out a small-to-medium sized glass baking container or similar and lightly spray with cooking oil of your choice. Gather a medium bowl for mixing ingredients.",
      "Lightly mix together all dry ingredients. You don't need to be thorough, this may lead to all of the protein powder staying at the bottom of the bowl.",
      "Add in all wet ingredients and mix to combined. We want to make sure the baking powder and egg whites are nicely distributed; this is noticeably lacking in typical baking ingredients, so it needs all the help it can get.",
      "Bake for __COOK_TIME__ minutes, or until the top looks set and not moist. Let cool for a few minutes since the glass will be hot.",
      "Optional: add whatever toppings you may want: whipped cream, more maple syrup, extra spices, or anything else you may want!",
    ],
    tags: ["protein", "seasonal"],
  },
  {
    title: "Applesauce Baked Oats",
    type: "breakfast",
    description:
      "I based this recipe on the classic apple crisp, just without all of the butter or sugar _(i.e. it's way worse)_.",
    created: new Date("2024-10-14"),
    ingredients: [
      {
        food: foods.oats,
        quantity: {
          grams: 80,
          imperial: {
            amount: 1,
            unit: "cup",
          },
        },
      },
      {
        food: foods.proteinPowder,
        quantity: {
          grams: 25,
          imperial: {
            amount: 2,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.bakingPowder,
        quantity: {
          grams: 3,
          imperial: {
            amount: oneHalf,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.salt,
        quantity: {
          grams: 1,
          imperial: {
            amount: oneEighth,
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
          grams: 155,
          imperial: {
            amount: twoThirds,
            unit: "cup",
          },
        },
      },
      {
        food: foods.applesauce,
        quantity: {
          grams: 120,
          imperial: {
            amount: oneHalf,
            unit: "cup",
          },
        },
      },
    ],
    cookInfo: {
      time: 30,
      temp: 375,
    },
    prepTime: 5,
    directions: [
      "Preheat oven to __TEMP__. Get out a small-to-medium sized glass baking container or similar and lightly spray with cooking oil of your choice. Gather a medium bowl for mixing ingredients.",
      "Lightly mix together all dry ingredients. You don't need to be thorough, this may lead to all of the protein powder staying at the bottom of the bowl.",
      "Add in all wet ingredients and mix to combined. We want to make sure the baking powder and egg whites are nicely distributed; this is noticeably lacking in typical baking ingredients, so it needs all the help it can get.",
      "Bake for __COOK_TIME__ minutes, or until the top looks set and not moist. Let cool for a few minutes since the glass will be hot.",
      "Optional: add whatever toppings you may want: extra apples, more maple syrup, extra spices, or anything else you may want!",
    ],
    tags: ["protein"],
  },
];
