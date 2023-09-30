import { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import LogoText from "./components/LogoText";
import ExLinkIcon from "./components/icons/ExLink";
import Footer from "./components/Footer";

function App() {
  const [contests, setContests] = useState([]);
  const [sites, setSites] = useState([]);

  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

    window.addEventListener("resize", updateResolution);

    return () => {
      window.removeEventListener("resize", updateResolution);
    };
  }, []);

  const updateResolution = () => {
    setResolution({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const formatDate = (data) => {
    const date = new Date(data);
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div className="fixed inset-0 bg-dark text-white">
      <Header height={`${resolution.height * 0.15}px`} sites={sites} />

      <main style={{ height: `${resolution.height * 0.73}px` }}>
        <Container>
          <section
            style={{ height: `${resolution.height * 0.73}px` }}
            className="w-full overflow-y-auto p-2"
          >
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
        </Container>
      </main>

      <Footer height={`${resolution.height * 0.12}px`} />
    </div>
  );
}

export default App;
