import { foods } from "src/pantry";
import Fraction from "src/types/Fraction";
import type { Recipe } from "src/types/util";

export const dinners: readonly Recipe[] = [
  {
    title: "Linguini and Meat Sauce",
    type: "dinner",
    description:
      "A super simple meat sauce that lacks some ingredients for me to call it a bolognese officially. It also uses a leaner meat which disqualifies it.",
    created: new Date("2024-10-31"),
    ingredients: [
      {
        food: foods.wholeGrainLinguine,
        quantity: {
          grams: 454,
          imperial: {
            amount: 1,
            unit: "lb",
          },
        },
      },
      {
        food: foods.groundTurkey,
        quantity: {
          grams: 670,
          imperial: {
            amount: new Fraction(3, 2),
            unit: "lb",
          },
        },
      },
      {
        food: foods.crushedTomatoes,
        quantity: {
          grams: 1270,
          imperial: {
            amount: 42,
            unit: "oz",
          },
        },
      },
      {
        food: foods.sweetOnion,
        quantity: {
          grams: 300,
          imperial: {
            amount: 1,
          },
        },
      },
      {
        food: foods.oliveOil,
        quantity: {
          grams: 30,
          imperial: {
            amount: 2,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.mincedGarlic,
        quantity: {
          grams: 30,
          imperial: {
            amount: 4,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.parmesan,
        quantity: {
          grams: 20,
          imperial: {
            amount: 4,
            unit: "tbsp",
          },
        },
      },
      {
        food: foods.oregano,
        quantity: {
          grams: 10,
          imperial: {
            amount: 3,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.blackPepper,
        quantity: {
          grams: 5,
          imperial: {
            amount: 2,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.paprika,
        quantity: {
          grams: 5,
          imperial: {
            amount: 2,
            unit: "tsp",
          },
        },
      },
      {
        food: foods.salt,
        quantity: {
          grams: 6,
          imperial: {
            amount: 1,
            unit: "tsp",
          },
        },
      },
    ],
    cookInfo: {
      time: 70,
    },
    prepTime: 10,
    directions: [
      "Dice your sweet onion into however small pieces you desire.",
      "Grab a large stockpot and set it over a medium heat on the stove. Add the olive oil and let the pot get hot but not too hot.",
      "Cook the onions for 5 minutes until they've softened up a bit. Then add the turkey and cook for another 5 minutes",
      "Add the crushed tomatoes, spices, and garlic.",
      "Stir the pot thoroughly to mix everything together, then cover and let simmer on low heat for 1 hour.",
      "Once the hour is almost up, begin boiling water for your pasta, and cook the linguine according to package instructions.",
      "After the pasta and sauce are done cooking, drain the linguine and serve with the sauce atop the pasta, and finish by adding the parmesan on top.",
    ],
    tags: [],
  },
];
