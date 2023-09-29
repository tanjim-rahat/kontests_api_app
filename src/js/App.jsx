import { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import LogoText from "./components/LogoText";
import ExLinkIcon from "./components/icons/ExLink";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const formatDate = (data) => {
    const date = new Date(data);
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div className="fixed inset-0 bg-dark text-white">
      <Header />

      <main className="h-[80vh]">
        <Container>
          <section className="w-full h-[70vh]">
            <div className="w-full h-[5vh] bg-black grid grid-cols-12 items-center font-medium text-sm">
              <p className="text-center">SL</p>
              <p className="text-center col-span-6">Name</p>
              <p className="text-center col-span-3">Lifespan</p>
              <p className="text-center col-span-2">Status</p>
            </div>

            <div className="h-[65vh] overflow-y-auto">
              {data.map((datum, index) => (
                <div
                  key={datum.url}
                  className={`w-full grid grid-cols-12 items-center py-6 ${
                    index % 2 == 0 ? "bg-dark2" : "bg-dark3"
                  }`}
                >
                  <p className="text-center font-medium">#0{index + 1}</p>

                  <p className="col-span-6 flex flex-col gap-1">
                    <a
                      href={datum.url}
                      target="_blank"
                      className="hover:text-main"
                    >
                      {datum.name}
                    </a>
                    <a className="text-xs">({datum.site})</a>
                  </p>

                  <div className="col-span-3 text-sm flex flex-col">
                    <p className="flex">
                      <span className="w-10 font-medium text-main">Start:</span>{" "}
                      {formatDate(datum.start_time)}
                    </p>
                    <p className="flex">
                      <span className="w-10 font-medium text-main">End:</span>{" "}
                      {formatDate(datum.end_time)}
                    </p>
                  </div>

                  <p className="text-center col-span-2">{datum.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="h-[10vh] flex items-center justify-center gap-8">
            <button className="flex items-center justify-center w-8 aspect-square rounded bg-main font-medium">
              1
            </button>
            <button className="flex items-center justify-center w-8 aspect-square rounded font-medium">
              2
            </button>
            <button className="flex items-center justify-center w-8 aspect-square rounded font-medium">
              3
            </button>
          </section>
        </Container>
      </main>

      <footer className="h-[10vh]">
        <Container className="h-full flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <LogoText className="text-main" />

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
