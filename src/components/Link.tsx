import { UnstyledLink as UILink } from "@adamjanicki/ui";
import { classNames } from "@adamjanicki/ui/functions";
import { Link as RouterLink } from "react-router-dom";
import "src/components/link.css";

type Props = React.ComponentProps<typeof UILink>;

const Link = ({ className, ...props }: Props) => (
  <UILink
    LinkElement={RouterLink}
    {...props}
    className={classNames(className, "link")}
  />
);

export const UnstyledLink = (props: Props) => (
  <UILink LinkElement={RouterLink} {...props} />
);

export default Link;
