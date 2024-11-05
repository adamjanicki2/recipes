import { useScrollToHash } from "@adamjanicki/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";
import Recipe from "src/pages/Recipe";
import { desserts } from "src/data/desserts";
import { routify } from "src/util";
import Search from "src/pages/Search";
import List from "src/pages/List";
import { breakfasts } from "src/data/breakfasts";
import { lunches } from "src/data/lunches";
import { dinners } from "src/data/dinners";
import { snacks } from "src/data/snacks";
import { drinks } from "src/data/drinks";

const App = () => {
  useScrollToHash();

  return (
    <BrowserRouter basename="/recipes">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query?" element={<Search />} />
        {/* Recipes */}
        {/* Breakfasts */}
        <Route
          path="/breakfast"
          element={
            <List
              lowername="breakfast"
              title="Breakfasts"
              recipes={breakfasts}
            />
          }
        />
        {breakfasts.map((breakfast) => (
          <Route
            path={`/breakfast/${routify(breakfast.title)}`}
            element={<Recipe recipe={breakfast} />}
          />
        ))}
        {/* Lunches */}
        <Route
          path="/lunch"
          element={<List lowername="lunch" title="Lunches" recipes={lunches} />}
        />
        {lunches.map((lunch) => (
          <Route
            path={`/lunch/${routify(lunch.title)}`}
            element={<Recipe recipe={lunch} />}
          />
        ))}
        {/* Dinners */}
        <Route
          path="/dinner"
          element={
            <List lowername="dinner" title="Dinners" recipes={dinners} />
          }
        />
        {dinners.map((dinner) => (
          <Route
            path={`/dinner/${routify(dinner.title)}`}
            element={<Recipe recipe={dinner} />}
          />
        ))}
        {/* Snacks */}
        <Route
          path="/snack"
          element={<List lowername="snack" title="Snacks" recipes={snacks} />}
        />
        {snacks.map((snack) => (
          <Route
            path={`/snack/${routify(snack.title)}`}
            element={<Recipe recipe={snack} />}
          />
        ))}
        {/* Desserts */}
        <Route
          path="/dessert"
          element={
            <List lowername="dessert" title="Desserts" recipes={desserts} />
          }
        />
        {desserts.map((dessert) => (
          <Route
            path={`/dessert/${routify(dessert.title)}`}
            element={<Recipe recipe={dessert} />}
          />
        ))}
        {/* Drinks */}
        <Route
          path="/drink"
          element={<List lowername="drink" title="Drinks" recipes={drinks} />}
        />
        {drinks.map((drink) => (
          <Route
            path={`/drink/${routify(drink.title)}`}
            element={<Recipe recipe={drink} />}
          />
        ))}
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
