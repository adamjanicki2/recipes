import { Select } from "@adamjanicki/ui";
import { useState } from "react";
import { Breadcrumb } from "src/components/Breadcrumbs";
import Link from "src/components/Link";
import Markdown, { SimpleMD } from "src/components/Markdown";
import PageWrapper from "src/components/PageWrapper";
import { Recipe as RecType, System, Quantity } from "src/types/util";
import { formatDate, toCelsius, UNITS_NEEDING_PLURALIZATION } from "src/util";

type Props = {
  recipe: RecType;
  crumbs: Breadcrumb[];
};

const tempUnits: Record<System, string> = {
  imperial: "F",
  metric: "C",
};

export default function Recipe({ recipe, crumbs }: Props) {
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

  const [system, setSystem] = useState<System>("imperial");

  const directions = mdFormatDirections(
    replaceDirectionKeywords(rawDirections, cookInfo, system)
  );
  const ingredients = formatIngredients(rawIngredients, system);

  return (
    <PageWrapper title={title} crumbs={crumbs}>
      <span>{formatDate(created)}</span>
      <SimpleMD>{description}</SimpleMD>
      <div>
        Prep time: {prepTime} min{" "}
        {cookInfo?.time && ` | Cook time: ${cookInfo?.time} min`}
      </div>
      <h2 id="ingredients">Ingredients</h2>
      <Select
        corners="sharp"
        aria-label="unit select"
        options={["metric", "imperial"]}
        onChange={(e) => setSystem(e.target.value as any)}
        value={system}
      />
      {ingredients}
      <h2 id="directions">How to make</h2>
      <Markdown>{directions}</Markdown>
      {Boolean(tags?.length) && <h3 id="tags">Tags</h3>}
      <div className="flex">
        {tags.map((tag, i) => (
          <Link className="mh1" key={i} to={`/search/${tag}`}>
            {tag}
          </Link>
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
  let temp = cookInfo?.temp;
  temp = temp && system === "metric" ? toCelsius(temp) : temp;
  const replacements: [string, string][] = [
    ["__TEMP__", `${temp}°${tempUnits[system]}`],
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

function formatIngredients(
  ingredients: RecType["ingredients"],
  system: System
): JSX.Element {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li>
          {formatIngredient(ingredient.quantity, system)}{" "}
          {ingredient.food.name.toLowerCase()}
        </li>
      ))}
    </ul>
  );
}

function formatIngredient(
  quantity: Quantity,
  system: System
): JSX.Element | string {
  if (!quantity.imperial.unit) {
    // unitless
    return quantity.imperial.amount.toString();
  }
  if (system === "metric") {
    return quantity.grams + "g";
  }
  let amt = quantity.imperial.amount;
  amt = typeof amt === "number" ? amt : amt.decimal;
  return (
    <>
      {quantity.imperial.amount.toString()}{" "}
      {quantity.imperial.unit +
        (amt > 1 && UNITS_NEEDING_PLURALIZATION.includes(quantity.imperial.unit)
          ? "s"
          : "")}
    </>
  );
}
