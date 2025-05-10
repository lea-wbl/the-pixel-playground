// import Image from "next/image";
import { FiPlay, FiSquare } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-screen flex flex-wrap bg-gray-50 mb-80">
      {/* DONUT */}
      <div className="w-80 h-80 bg-gray-100 grid place-content-center relative">
        <div className="relative flex justify-center items-center">
          {/* Base yellow circle */}
          <div className="w-20 h-20 rounded-full bg-yellow-400 border-2 border-gray-900 relative shadow-lg">
            {/* The blob positioned behind everything */}
            <div
              className="absolute inset-0 w-24 h-24 blob2 z-10"
              style={{
                transform: "translate(-12px, -8px)",
              }}
            />
          </div>

          {/* Small circle absolutely positioned to overlay everything */}
          <div className="absolute w-7 h-7 rounded-full bg-gray-100 border-2 border-gray-900 z-30 top-1/2 left-1/2 transform -translate-1/2 inset-shadow-sm"></div>
        </div>
      </div>

      {/* LICENSE PLATE */}
      <div className="w-80 h-80 bg-red-200 grid place-content-center">
        <div className="bg-white p-0.5 rounded-lg grid space-content-center shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">
          <div className="bg-white w-full h-full rounded-lg border-stone-50 border-2 inset-shadow-plate grid justify-items-center content-between p-1">
            <div className="bg-sunset w-full relative grid place-content-center">
              <div
                className="absolute top-0 left-1/2 h-full aspect-square rounded-full z-0"
                style={{
                  transform: "translateX(-50%)",
                  backgroundImage:
                    "linear-gradient(to bottom, #FFB900 0%, #FFB900 50%, #FFFFFF 50%, #FFFFFF 56%, #FFB900 56%, #FFB900 68%, #FFFFFF 68%, #FFFFFF 74%, #FFB900 74%, #FFB900 86%, #FFFFFF 86%, #FFFFFF 100%)",
                }}
              ></div>
              <span className="text-red-600 text-lg relative z-10 font-california font-bold">
                CALIFORNIA
              </span>
            </div>
            <span className="text-blue-900 text-6xl text-effect font-outatime pt-1">
              OUTATIME
            </span>
            <span className="text-amber-400 text-xs -mt-1 font-golden-state font-medium">
              The Golden State
            </span>
          </div>
        </div>
      </div>

      {/* RECORD PLAYER */}
      <div className="w-80 h-80 bg-green-800 grid place-content-center">
        <div className="w-50 aspect-[4/3] bg-green-200 rounded border-3 border-gray-900 flex items-start justify-between p-2">
          {/* vinyl record */}
          <div className="bg-vinyl w-32 aspect-square bg-gray-500 rounded-full relative sshadow">
            <div className="w-10 aspect-square bg-transparent rounded-full absolute top-1/2 left-1/2 transform -translate-1/2 border-[1rem] border-red-700 ssshadow animate-sp animation-duration-800">
              <svg
                viewBox="0 0 200 200"
                className="w-9 absolute top-1/2 left-1/2 transform -translate-1/2"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>

                <text
                  font-size="28"
                  font-weight="bold"
                  fill="black"
                  text-anchor="middle"
                >
                  <textPath href="#circlePath" startOffset="50%">
                    THE PIXEL PLAYGROUND
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end h-full">
            {/* tonearm */}
            <div
              id="tonearm"
              className="bg-neutral-900 w-4 aspect-square rounded-full shadow-md relative transform rotate-45"
            ></div>
            {/* play buttons */}
            <div className="space-x-2">
              <button className="text-xs bg-red-600 rounded-full p-1 record-btn-shadow hover:cursor-pointer transition-all">
                <FiPlay />
              </button>
              <button className="text-xs bg-red-600 rounded-full p-1 record-btn-shadow hover:cursor-pointer transition-all">
                <FiSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
