import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import ExLinkIcon from "./components/icons/ExLink";
import FilterIcon from "./components/icons/Filter";

function App() {
  return (
    <div className="fixed inset-0 bg-dark text-white">
      <header className="h-[10vh]">
        <Container className="h-full flex items-center justify-between">
          <a href="/">
            <button
              aria-label="logo"
              role="hyperlink"
              className="uppercase text-xl tracking-wide font-medium"
            >
              Kontests
            </button>
          </a>

          <div className="flex items-center gap-8">
            <Searchbar />

            <button>
              <FilterIcon />
            </button>
          </div>
        </Container>
      </header>
      <main className="h-[80vh]"></main>
      <footer className="h-[10vh] bg-red-500">
        <Container className="h-full flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <a href="/">
              <button
                aria-label="logo"
                role="hyperlink"
                className="uppercase text-xl tracking-wide font-medium text-main"
              >
                Kontests
              </button>
            </a>

            <p className="text-xs">
              Created using{" "}
              <a
                href="https://kontests.net/api"
                className="text-main underline"
              >
                kontest.net
              </a>{" "}
              free API
            </p>
          </div>

          <a href="https://kontests.net/api">
            <button>
              <ExLinkIcon />
            </button>
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default App;
