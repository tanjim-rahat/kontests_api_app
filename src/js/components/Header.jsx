import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import LogoText from "./LogoText";
import Searchbar from "./Searchbar";
import FilterIcon from "./icons/Filter";
import ExLinkIcon from "./icons/ExLink";
import TickIcon from "./icons/Tick";
import SpinnerIcon from "./icons/Spinner";

function Header() {
  const [showFilter, setShowFilter] = useState(false);

  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/sites")
      .then((res) => res.json())
      .then((data) => {
        setSites(data);
      });
  }, []);

  return (
    <header className="h-[15vh]">
      <Container className="h-full flex items-center justify-between relative">
        <LogoText />

        <div className="flex items-center gap-8">
          {/* <Searchbar /> */}

          <button
            aria-label="filter button"
            role="button"
            className="p-2 hover:text-main duration-100 rounded"
            onClick={(event) => {
              event.stopPropagation();
              setShowFilter((prev) => !prev);
            }}
          >
            <FilterIcon />
          </button>
        </div>

        {showFilter && (
          <Filter sites={sites} hide={() => setShowFilter(false)} />
        )}
      </Container>
    </header>
  );
}

function Filter({ hide, sites }) {
  const filter = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", closeHandler);

    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, []);

  const closeHandler = (event) => {
    if (filter.current && !filter.current.contains(event.target)) {
      hide();
    }

    document.removeEventListener("mousedown", closeHandler);
  };

  return (
    <div
      ref={filter}
      className="absolute right-0 top-full -translate-y-8 bg-[#1a1a1a] rounded-md shadow text-sm z-50"
    >
      <span className="absolute w-4 h-4 bg-[#1a1a1a] rotate-45 top-0 right-0 -translate-y-1/2 -translate-x-3"></span>

      {sites.length == 0 && (
        <div className="w-40 h-40 flex items-center justify-center">
          <SpinnerIcon size={32} className="animate-spin" />
        </div>
      )}

      {sites.map((site) => (
        <div key={site[2]} className="w-full flex px-4 py-3 gap-3">
          <button className="rounded bg-main px-1 border-2 border-white">
            <TickIcon size={16} />
          </button>
          <span className="flex items-center gap-1">
            <p>{site[0]}</p>
            <a href={site[2]} target="_blank" className="p-1 text-main">
              <button>
                <ExLinkIcon size={12} />
              </button>
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Header;
