import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import FilterIcon from "./components/icons/Filter";

function App() {
  return (
    <div className="fixed inset-0 bg-dark text-white">
      <header className="h-[100px]">
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
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
