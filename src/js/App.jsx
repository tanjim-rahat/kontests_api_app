import { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import LogoText from "./components/LogoText";
import ExLinkIcon from "./components/icons/ExLink";

function App() {
  const [contests, setContests] = useState([]);
  const [sites, setSites] = useState([]);
  // const [pagination, setPagination] = useState({
  //   shownPerPage: 10,
  //   shownPage: 0,
  //   pageCount: 0,
  // });

  useEffect(() => {
    Promise.all([
      fetch("https://kontests.net/api/v1/all").then((res) => res.json()),
      fetch("https://kontests.net/api/v1/sites").then((res) => res.json()),
    ]).then((data) => {
      const sitesObj = {};
      data[1].forEach((site) => (sitesObj[site[0]] = site[2]));

      setSites(data[1]);
      setContests(
        data[0].map((c, index) => ({
          id: index,
          siteUrl: sitesObj[c.site],
          ...c,
        }))
      );
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

      <main className="h-[75vh]">
        <Container>
          {/* <section className="w-full h-[70vh]">
            <div className="h-[70vh] overflow-y-auto">
              {data
                .slice(
                  pagination.shownPage * pagination.shownPerPage,
                  (pagination.shownPage + 1) * pagination.shownPerPage
                )
                .map((datum, index) => (
                  <div
                    key={datum.url}
                    className={`w-full grid grid-cols-12 items-center py-6 ${
                      index % 2 == 0 ? "bg-dark2" : "bg-dark3"
                    }`}
                  >
                    <p className="text-center font-medium">#0{datum.id + 1}</p>

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
                        <span className="w-10 font-medium text-main">
                          Start:
                        </span>{" "}
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
          </section> */}

          <section className="w-full h-[70vh] overflow-y-auto p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contests.map((contest, index) => (
                <div
                  key={contest.id}
                  className="w-full flex flex-col gap-2 px-6 md:px-8 py-8 bg-dark2 rounded-md relative"
                >
                  <span className="absolute top-0 left-0 px-3 py-1 rounded flex items-center justify-center -translate-x-2 -translate-y-2 bg-main font-medium">
                    {index + 1}
                  </span>

                  <h2>
                    <a
                      href={contest.url}
                      target="_blank"
                      className="hover:text-main text-lg"
                    >
                      {contest.name}
                    </a>
                  </h2>

                  <div className="flex gap-2 items-center text-xs">
                    <a
                      href={contest.siteUrl}
                      target="_blank"
                      className="text-main tracking-wider"
                    >
                      by {contest.site}
                    </a>

                    <span
                      className={`text-[10px] p-1 rounded-sm uppercase tracking-wider ${
                        contest.status == "CODING"
                          ? "bg-red-600"
                          : "bg-green-700"
                      }`}
                    >
                      {contest.status == "CODING" ? "ongoing" : "upcoming"}
                    </span>
                  </div>

                  <div className="text-sm">
                    <span className="text-main">From</span>{" "}
                    <span className="font-medium">
                      {formatDate(contest.start_time)}
                    </span>{" "}
                    <span className="text-main">to</span>{" "}
                    <span className="font-medium">
                      {formatDate(contest.end_time)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="h-[10vh] flex items-center justify-center gap-6">
            {Array.from(Array(pagination.pageCount).keys()).map((number) => (
              <button
                key={number}
                className={`flex items-center justify-center w-8 aspect-square rounded font-medium ${
                  pagination.shownPage == number ? "bg-main" : "bg-dark2"
                }`}
                onClick={() =>
                  setPagination((prev) => ({ ...prev, shownPage: number }))
                }
              >
                {number + 1}
              </button>
            ))}
          </section> */}
        </Container>
      </main>

      <footer className="h-[10vh]">
        <Container className="h-full flex items-center justify-between">
          <div>
            <LogoText className="text-main" />

            <p className="text-xs px-2">
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

          <a href="https://kontests.net/api" target="_blank">
            <button className="p-2 rounded">
              <ExLinkIcon />
            </button>
          </a>
        </Container>
      </footer>
    </div>
  );
}

export default App;
