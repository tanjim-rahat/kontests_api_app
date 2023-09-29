import Container from "./components/Container";

function App() {
  return (
    <div className="fixed inset-0 bg-dark text-white">
      <header className="h-[100px]">
        <Container className="h-full flex items-center justify-between">
          <a href="/">
            <button aria-label="logo" role="hyperlink">
              Kontests
            </button>
          </a>
        </Container>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
