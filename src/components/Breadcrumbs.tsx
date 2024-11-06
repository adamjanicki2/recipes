import React from "react";
import Link from "src/components/Link";

export type Breadcrumb = {
  to?: string;
  label: string;
};

type Props = {
  crumbs: Breadcrumb[];
};

export default function Breadcrumbs({ crumbs }: Props) {
  return (
    <div
      className="flex items-center w-100"
      style={{
        whiteSpace: "pre-wrap",
      }}
    >
      {crumbs.map(({ to, label }, i) => (
        <React.Fragment key={i}>
          {i > 0 && <> / </>}
          {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
