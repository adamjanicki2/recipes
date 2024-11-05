import Breadcrumbs, { type Breadcrumb } from "src/components/Breadcrumbs";
import { useDocumentTitle } from "src/hooks";
import type { Children } from "src/types/util";

type Props = {
  children: Children;
  title: string;
  documentTitle?: string;
  titleClass?: string;
  crumbs?: Breadcrumb[];
};

const PageWrapper = ({
  children,
  title,
  documentTitle,
  titleClass = "",
  crumbs,
}: Props) => {
  useDocumentTitle(`${documentTitle ?? title}`);

  return (
    <div
      className="flex flex-column items-center w-100 pb3"
      style={{ minHeight: "70vh", maxWidth: "95%", margin: "0 auto" }}
    >
      {crumbs && <Breadcrumbs crumbs={crumbs} />}
      <h1 className={`page-title-text tc ${titleClass}`}>{title}</h1>
      {children}
    </div>
  );
};

export default PageWrapper;
