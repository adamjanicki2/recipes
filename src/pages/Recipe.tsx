import { useState } from "react";
import Link from "src/components/Link";
import Markdown, { SimpleMD } from "src/components/Markdown";
import PageWrapper from "src/components/PageWrapper";
import { Recipe as RecType, System, Quantity } from "src/types/util";
import { formatDate } from "src/util";

type Props = {
  recipe: RecType;
};

const tempUnits: Record<System, string> = {
  imperial: "F",
  metric: "C",
};

export default function Recipe({ recipe }: Props) {
  const {
    title,
    description,
    ingredients: rawIngredients,
    created,
    cookInfo,
    prepTime,
    directions: rawDirections,
    tags,
  } = recipe;

  const [system] = useState<System>("metric");

  const directions = mdFormatDirections(
    replaceDirectionKeywords(rawDirections, cookInfo, system)
  );
  const ingredients = mdFormatIngredients(rawIngredients, system);

  return (
    <PageWrapper title={title}>
      <span>{formatDate(created)}</span>
      <SimpleMD>{description}</SimpleMD>
      <div>
        Prep time: {prepTime}min{" "}
        {cookInfo?.time && ` | Cook time: ${cookInfo?.time} min`}
      </div>
      <h2 id="ingredients">Ingredients</h2>
      <Markdown>{ingredients}</Markdown>
      <h2 id="directions">How to make</h2>
      <Markdown>{directions}</Markdown>
      <div className="flex">
        {tags.map((tag) => (
          <Link to={`/search/${tag}`}>{tag}</Link>
        ))}
      </div>
    </PageWrapper>
  );
}

function replaceDirectionKeywords(
  directions: string[],
  cookInfo: RecType["cookInfo"],
  system: System
): string[] {
  const replacements: [string, string][] = [
    ["__TEMP__", `${cookInfo?.temp}°${tempUnits[system]}`],
    ["__COOK_TIME__", cookInfo?.time?.toString() as string],
  ];
  return directions.map((direction) =>
    replacements.reduce(
      (acc, [k, v]) => acc.replaceAll(k, (v as any).toString()),
      direction
    )
  );
}

function mdFormatDirections(directions: string[]): string {
  return directions.reduce(
    (acc, cur, index) => `${acc}${index + 1}. ${cur}\n`,
    ""
  );
}

function mdFormatIngredients(
  ingredients: RecType["ingredients"],
  system: System
): string {
  return ingredients.reduce(
    (acc, cur) =>
      `${acc}- ${formatIngredient(
        cur.quantity,
        system
      )} ${cur.food.name.toLowerCase()}\n`,
    ""
  );
}

function formatIngredient(quantity: Quantity, system: System): string {
  if (system === "metric") {
    return quantity.grams + "g";
  }
  let amt = quantity.imperial.amount;
  amt = typeof amt === "number" ? amt : amt.decimal;
  return (
    quantity.imperial.amount.toString() +
    quantity.imperial.unit +
    (amt > 1 ? "s" : "")
  );
}
