import type { Breadcrumb } from "src/components/Breadcrumbs";
import Link from "src/components/Link";
import PageWrapper from "src/components/PageWrapper";
import { Recipe } from "src/types/util";
import { routify } from "src/util";

type Props = {
  recipes: readonly Recipe[];
  crumbs: Breadcrumb[];
  title: string;
};

export default function List({ recipes, crumbs, title }: Props) {
  // @ts-ignore
  const sortedRecipes: Recipe[] = recipes.sort((a: Recipe, b: Recipe) =>
    a.title > b.title ? 1 : -1
  );
  return (
    <PageWrapper title={title} crumbs={crumbs}>
      <div className="flex flex-column items-center justify-center f4">
        {sortedRecipes.length ? (
          sortedRecipes.map((recipe) => (
            <Link
              className="mv1"
              to={`/${recipe.type}/${routify(recipe.title)}`}
            >
              {recipe.title}
            </Link>
          ))
        ) : (
          <p>No recipes available yet</p>
        )}
      </div>
    </PageWrapper>
  );
}
