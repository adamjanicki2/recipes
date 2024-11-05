import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Markdown(props: Props) {
  return (
    <ReactMarkdown
      {...props}
      remarkPlugins={[remarkGfm]}
      allowedElements={["ol", "ul", "li", "a", "strong", "em", "p"]}
    />
  );
}

export function SimpleMD(props: Props) {
  return (
    <ReactMarkdown
      {...props}
      remarkPlugins={[remarkGfm]}
      allowedElements={["a", "strong", "em", "p"]}
    />
  );
}
