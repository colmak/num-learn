import type { NextPage } from "next";
import { trpc } from "./utils/trpc";
import Head from "next/head";
import { FiUser, FiSliders, FiAward, FiInfo } from "react-icons/fi";
import { IconContext } from "react-icons";
import ThemeIcon from './components/ThemeIcon'

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

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
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </div>
        <div id="footer" className="grow-0 grid bottom-0">
          <div>e</div>
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;

{
  /* <h1 className="grid gap-3 mt-pt-3 3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
        </h1> */
}
