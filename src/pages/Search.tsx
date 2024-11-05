import { useParams } from "react-router-dom";
import PageWrapper from "src/components/PageWrapper";

export default function Search() {
  const { query } = useParams();
  return (
    <PageWrapper title="Search">
      <p>query: {query}</p>
    </PageWrapper>
  );
}
