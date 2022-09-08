import type { NextPage } from "next";
import { trpc } from "./utils/trpc";
import Head from "next/head";
import { FiUser, FiSliders, FiAward, FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";
import ThemeIcon from './components/ThemeIcon'
import FooterMenu from './components/FooterMenu'

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Ron" }]);
  return (
    <>
      <Head>
        <title>Learn Pi</title>

        <meta name="description" content="Learn the digits of Pi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4"> */}
      <main className="bac-color container mx-auto flex flex-col items-center justify-flex-start min-h-screen">
        <div
          id="top"
          className="pt-3 grow-0 grid gap-3 mt-pt-3 3 text-center md:grid-cols-3 lg:w-2/3"
        >
          <h1 className="text-5xl title-color md:text-[3rem] leading-normal font-bold ">
            Learn <span className="main-color text-6xl">π</span>
          </h1>
          <div
            id="menu"
            className="pt-3 grid gap-3 mt-pt-3 3 items-center grid-cols-5"
          >
            <IconContext.Provider value={{ size: "30" }}>
              <FiAward className="sub-color"/>
              <FiSliders className="sub-color"/>
              <FiInfo className="sub-color"/>
              <FiUser className="sub-color"/>
              <ThemeIcon/>
            </IconContext.Provider>
          </div>
          <div
            id="quick-config"
            className="pr-10 grid text-center items-center justify-end"
          >
            <h1 className="text-1xl sub-color md:text-[1rem] leading-normal font-bold ">
              Learn
            </h1>
            <h1 className="text-1xl sub-color md:text-[1rem] leading-normal font-bold ">
              Test
            </h1>
          </div>
        </div>
        <div
          id="mid"
          className="pt-3 grow grid gap-3 mt-pt-3 3 items-center justify-center md:grid-rows-3"
        >
          <div>temp</div>
          <div>temp</div>
          <div>temp</div>
        </div>
        <div id="footer" className="grow-0 grid bottom-0 p-8">
          <FooterMenu/>
        </div>
      </main>
    </>
  );
};

export default Home;

