import Image from "next/image";
import proj1 from "../../../public/proj1.PNG";
import proj2 from "../../../public/proj2.PNG";
import proj3 from "../../../public/proj3.PNG";
import proj4 from "../../../public/proj4.PNG";
import Link from "next/link";

const Project = () => {
  return (
    <div className="grid bg-white gap-10 pt-5 content-center justify-items-center text-center lg:px-32 md:px-16 sm:px-14 min-[320px]:px-8 min-[320px]:pb-48 md:mb-20 sm:mb-20 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">PROJECT</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <Image
          src={proj1}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50 dark:shadow-xl dark:shadow-black"
        />
        <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">Cinezone</span></h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
            {" "}
            Dive into an extensive and ever&#45;growing collection of movies from
            different genres, eras, and cultures. a meticulously crafted movie
            collection app that seamlessly combines the power of React and
            Next.js with the vast MovieDB API. you can effortlessly search for
            your favorite films or discover hidden gems that you never knew
            existed.
          </p>
          <div className="flex justify-center gap-4 pt-3 flex-wrap">
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              React
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Javascript
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Next.js
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Tailwind
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://cinezone-sigma.vercel.app/"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              See Live
            </Link>
            <Link
              href={"https://github.com/riellll/Cinezone.git"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-5 py-5">
        <div className="flex flex-col justify-center order-last md:order-first">
          <h1 className="text-2xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">TechStack</span></h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          Dive into the ever&#45;evolving world of technology with TechStack, your go&#45;to app for staying updated on the latest tech news and harnessing the collective wisdom of the tech community. Crafted using cutting&#45;edge technologies, including React and Next.js, and fueled by the TechNews API and Stack Overflow integration, TechStack empowers you to explore, learn, and engage like never before.
          </p>
          <div className="flex justify-center gap-4 pt-3 flex-wrap">
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              React
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Javascript
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Next.js
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Tailwind
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://techstack-ucode.vercel.app/"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              See Live
            </Link>
            <Link
              href={"#"}
              // target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              Source Code
            </Link>
          </div>
        </div>
        <Image
          src={proj2}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50 dark:shadow-xl dark:shadow-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <Image
          src={proj3}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50 dark:shadow-xl dark:shadow-black"
        />
        <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">Kodejobs</span></h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          KodeJobs simplifies the hiring process by allowing companies to effortlessly post job openings. Whether you&#39;re a startup, an established firm, or anything in between, our platform provides a user&#45;friendly interface to showcase your company and the positions you&#39;re looking to fill.
          </p>
          <div className="flex justify-center gap-4 pt-3 flex-wrap">
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              React
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Javascript
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Next.js
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Tailwind
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Node.js
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Express
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://kodejob-2pa9.vercel.app/"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
            See Live         
            </Link>
            <Link
              href={"https://github.com/riellll/kodejob.git"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-5 py-5">
        <div className="flex flex-col justify-center order-last md:order-first">
          <h1 className="text-2xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">ThreadSync</span></h1>
          <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          ThreadSync your ultimate creative hub where the power of threaded conversations meets the freedom to share your visual and textual stories effortlessly. ThreadSync combines the best of Twitter&#39;s thread format with a wealth of versatile features, allowing you to post images, text content, engage in meaningful discussions, and keep your profile updated with ease.
          </p>
          <div className="flex justify-center gap-4 pt-3 flex-wrap">
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              React
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Javascript
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Next.js
            </p>  
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              Tailwind
            </p>
            <p className="font-semibold rounded bg-gray-200 px-2 shadow-inner shadow-neutral-950/50 dark:shadow-neutral-500/50 dark:bg-black">
              MongoDB
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-10">
            <Link
              href={"https://threadsync.vercel.app/"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              See Live
            </Link>
            <Link
              href={"https://github.com/riellll/threadsync"}
              target="_blank"
              className="font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-gradient-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-gradient-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950/100 dark:shadow-gray-950/80"
            >
              Source Code
            </Link>
          </div>
        </div>
        <Image
          src={proj4}
          alt="project"
          width={500}
          height={500}
          priority={false}
          className="w-full h-auto rounded-xl shadow-xl shadow-slate-900/50 dark:shadow-xl dark:shadow-black"
        />
      </div>
    </div>
  );
};

export default Project;
