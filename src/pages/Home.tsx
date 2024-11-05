import { UnstyledLink } from "src/components/Link";
import PageWrapper from "src/components/PageWrapper";

const menus = [
  ["breakfast", "Breakfast"],
  ["lunch", "Lunch"],
  ["dinner", "Dinner"],
  ["dessert", "Desserts"],
  ["snack", "Snacks"],
  ["drink", "Drinks"],
] as const;

const Home = () => (
  <PageWrapper title="Home">
    <div className="flex flex-wrap items-center justify-center">
      {menus.map(([slug, label]) => (
        <UnstyledLink
          className="flex items-center justify-center pa5 ma3 cards"
          to={`/${slug}`}
        >
          <h2>{label}</h2>
        </UnstyledLink>
      ))}
    </div>
  </PageWrapper>
);

export default Home;
