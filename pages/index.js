import Head from "next/head";
import { useEffect, useState } from "react";
import { applyTheme } from "../themes/utils";
import themes from "../themes/base.js";

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    applyTheme(currentTheme.colorTheme);
    setWindowWidth(window.innerWidth);
  }, [currentTheme]);

  const handleTheme = (next) => {
    let currentId = currentTheme.id;

    if (next) {
      setCurrentTheme(themes[currentId >= 3 ? 0 : currentId]);
    } else {
      setCurrentTheme(themes[currentId <= 1 ? 2 : currentId - 2]);
    }
  };

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <div className="w-full mx-auto h-screen bg-primary select-none transition-all duration-500">
        <div
          className={`flex ${currentTheme.id === 2 ? 'flex-col-reverse' : 'flex-col'} xl:flex-row h-full items-center justify-between lg:mr-[10%] lg:ml-[15%] `}
        >
          <div className={`${currentTheme.id === 2 && windowWidth < 1280 ? 'mb-[10%]' : ''} flex flex-col text-text-base items-start justify-evenly grow text-white px-[10%] lg:px-0 lg:gap-[5vh]`}>
            <div className="self-start py-[5%] lg:py-0 flex">
              <img
                src={`./${currentTheme.icon}`}
                className="h-20 md:h-28 lg:w-auto"
              />
            </div>

            <h3 className="text-[26px] md:text-5xl lg:text-[2.5vw] font-bold transition-all ease-out">
              {currentTheme.title}
            </h3>

            <p className="text-base md:text-xl  md:w-[90%] lg:w-[80%] lg:text-[1vw] lg:leading-snug transition-all ease-out">
              {currentTheme.text}
            </p>
            <a className="bg-secondary px-6 py-2 text-[#fff]" href="#">
              Pobierz aplikację
            </a>
          </div>

          <div className="">
            <svg className="absolute top-1/2 left-[2%] md:left-[5%] cursor-pointer" onClick={() => handleTheme(false)}xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M12 18L2 10L12 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-text-base"/>
            </svg>
            <svg
              className="absolute top-1/2 right-[2%] md:right-[5%] cursor-pointer"
              onClick={() => handleTheme(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
            >
              <path
                className="stroke-text-base"
                d="M2 17.6819L12 9.68189L2 1.68189"
                stroke="#fff"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {windowWidth >= 1280 && (
            <img src={`./${currentTheme.desktopImg}`} className={`${currentTheme.id === 2 ? 'self-start' : 'self-end'} w-[35vw]`} />
          )}
          {windowWidth < 1280 && (
            <img src={`./${currentTheme.mobileImg}`} className="w-[95%] md:w-4/5" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
