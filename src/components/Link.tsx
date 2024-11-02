import { UnstyledLink } from "@adamjanicki/ui";
import { classNames } from "@adamjanicki/ui/functions";
import { Link as RouterLink } from "react-router-dom";
import "src/components/link.css";

type Props = React.ComponentProps<typeof UnstyledLink>;

const Link = ({ className, ...props }: Props) => (
  <UnstyledLink
    LinkElement={RouterLink}
    {...props}
    className={classNames(className, "link")}
  />
);

export default Link;
