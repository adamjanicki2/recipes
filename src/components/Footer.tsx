import Link from "src/components/Link";

const Footer = () => (
  <footer className="pv5 ph2 flex items-center justify-center w-100">
    <p className="fw5 f5 tc">
      Est. 2024 Built from scratch by{" "}
      <Link to="https://adamjanicki.xyz" target="_blank" rel="noreferrer">
        Adam
      </Link>
    </p>
  </footer>
);

export default Footer;
