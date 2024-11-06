import { Input } from "@adamjanicki/ui";
import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Link from "src/components/Link";
import PageWrapper from "src/components/PageWrapper";
import searchRecipes from "src/data/search";
import { routify } from "src/util";

export default function Search() {
  const navigate = useNavigate();
  const query = (useParams().query || "").trim();
  const [value, setValue] = useState(query);
  const matches = searchRecipes(query);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <PageWrapper title="Search">
      <Input
        className="w-70"
        placeholder="Search recipes..."
        corners="sharp"
        ref={inputRef}
        value={value}
        onChange={(e) => {
          const newVal = e.target.value;
          setValue(newVal);
          if (!newVal) {
            navigate("/search/");
          }
        }}
        onKeyDown={(e) => {
          const trimmed = value.trim();
          if (e.code === "Enter" && trimmed && trimmed !== query) {
            e.preventDefault();
            inputRef.current?.blur();
            navigate("/search/" + value.trim());
          }
        }}
      />
      <p>
        {matches.length} matches found for query '{query}'
      </p>
      {Boolean(matches.length) && (
        <div className="flex items-center justify-center flex-column f4">
          {matches.map((recipe) => (
            <Link
              className="mv1"
              to={`/${recipe.type}/${routify(recipe.title)}`}
            >
              {recipe.title}
            </Link>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
