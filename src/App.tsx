import React from "react";
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
import type { Breadcrumb } from "src/components/Breadcrumbs";
import ScrollTop from "src/components/ScrollTop";

const home: Breadcrumb = {
  to: "/",
  label: "Home",
};

const menus = [
  ["breakfast", "Breakfast", breakfasts],
  ["lunch", "Lunch", lunches],
  ["dinner", "Dinner", dinners],
  ["dessert", "Dessert", desserts],
  ["snack", "Snacks", snacks],
  ["drink", "Drinks", drinks],
] as const;

const App = () => {
  return (
    <BrowserRouter basename="/recipes">
      <ScrollTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query?" element={<Search />} />
        {menus.map(([lowername, title, recipes]) => (
          <React.Fragment key={lowername}>
            <Route
              path={`/${lowername}`}
              element={
                <List
                  recipes={recipes}
                  title={title}
                  crumbs={[home, { label: title }]}
                />
              }
            />
            {recipes.map((recipe, i) => (
              <Route
                key={i}
                path={`/${recipe.type}/${routify(recipe.title)}`}
                element={
                  <Recipe
                    recipe={recipe}
                    crumbs={[
                      home,
                      { to: "/" + recipe.type, label: title },
                      { label: recipe.title },
                    ]}
                  />
                }
              />
            ))}
          </React.Fragment>
        ))}
        {/* Make sure this is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
