export type Children = React.ReactNode | React.ReactNode[];

const UNITS = ["g", "kg", "ml"] as const;
const IMPERIAL_UNITS = ["cup", "tsp", "tbsp", "lb"] as const;
const ALL_UNITS = [...UNITS, ...IMPERIAL_UNITS] as const;
type Unit = typeof ALL_UNITS[number];

type Measurement = {
  amount: Fraction;
  unit: Unit;
};
type Quantity = {
  imperial: Measurement;
  metric: Measurement;
};

export class Fraction {
  public readonly decimal: number;
  constructor(readonly num: number, readonly denom = 1) {
    this.decimal = num / denom;
  }

  public equals(that: Fraction): boolean {
    return this.num * that.denom === this.denom * that.num;
  }
}

export type Food = {
  name: string;
  cpg: Fraction;
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
type Category = typeof CATEGORIES[number];

const TAGS = [] as const;
type Tag = typeof TAGS[number];

export type Recipe = {
  title: string;
  created: Date;
  ingredients: Ingredient[];
  cookTime?: number;
  prepTime: number;
  directions: string[];
  category: Category;
  tags: Tag[];
};
