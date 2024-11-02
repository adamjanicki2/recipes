import { useScrollToHash } from "@adamjanicki/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import About from "src/pages/About";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";
import Recipe from "src/pages/Recipe";
import { desserts } from "src/data/desserts";
import { routify } from "src/util";

const App = () => {
  useScrollToHash();

  return (
    <BrowserRouter basename="/recipes">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        {/* Recipes */}
        {/* Desserts */}
        {desserts.map((dessert) => (
          <Route
            path={`/dessert/${routify(dessert.title)}`}
            element={<Recipe recipe={dessert} />}
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
