import Fraction from "src/types/Fraction";

export type Children = React.ReactNode | React.ReactNode[];

const IMPERIAL_UNITS = ["cup", "tsp", "tbsp", "lb", "oz"] as const;
export type Unit = typeof IMPERIAL_UNITS[number];
const SYSTEMS = ["metric", "imperial"] as const;
export type System = typeof SYSTEMS[number];

export type Quantity = {
  grams: number;
  imperial: {
    amount: Fraction | number;
    unit?: Unit;
  };
};

export type Food = {
  name: string;
  cpg: number;
};

type Ingredient = {
  food: Food;
  quantity: Quantity;
};

const CATEGORIES = [
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
] as const;
export type Category = typeof CATEGORIES[number];

const TAGS = ["protein", "seasonal"] as const;
type Tag = typeof TAGS[number];
type CookInfo = {
  time: number;
  temp?: number;
};
const TYPES = [
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
  "drink",
] as const;
type Type = typeof TYPES[number];
export type Recipe = {
  title: string;
  type: Type;
  description: string;
  created: Date;
  ingredients: Ingredient[];
  cookInfo?: CookInfo;
  prepTime: number;
  directions: string[];
  tags: Tag[];
};
