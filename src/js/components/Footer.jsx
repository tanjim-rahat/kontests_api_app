import Container from "./Container";
import LogoText from "./LogoText";
import ExLinkIcon from "./icons/ExLink";

function Footer({ height }) {
  return (
    <footer style={{ height: height }}>
      <Container className="h-full flex items-center justify-between">
        <div>
          <LogoText className="text-main" />

          <p className="text-xs px-2">
            Created using{" "}
            <a href="https://kontests.net/api" className="text-main underline">
              kontest.net
            </a>{" "}
            free API
          </p>
        </div>

        <a href="https://kontests.net/api" target="_blank">
          <button className="p-2 rounded">
            <ExLinkIcon />
          </button>
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
