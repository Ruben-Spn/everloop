"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white bg-black font-poppins w-full min-h-screen flex flex-col items-center justify-start animated-gradient">
      <div className="h-screen w-full flex flex-col z-10">
        <div className="w-full px-40 py-12">
          <nav className="w-full drop-shadow-nav bg-mauve-100/[.15] p-4 rounded-full flex items-center justify-between text-sm">
            <Image
              src={"/everloop.svg"}
              height={35}
              width={135}
              alt="Everlooop logo"
            />
            <ul className="flex flex-row items-center w-1/2 justify-between ">
              <li>
                <Link href={""}>Our story</Link>
              </li>
              <li>
                <Link href={""}>Projects</Link>
              </li>
              <li>
                <Link href={""}>Collaborate</Link>
              </li>
              <li>
                <Link href={""}>Our Team</Link>
              </li>
            </ul>
            <button className="rounded-full bg-mauve-200 px-4 py-3">
              Contact us
            </button>
          </nav>
        </div>
        <header className=" w-full h-full flex">
          <div className=" h-full w-1/2"></div>
          <div className=" h-full w-1/2 pb-12 relative overflow-hidden">
            <Image
              src={"/banner.png"}
              fill
              alt="Header image"
              className="object-contain translate-x-[15%] "
            />
          </div>
        </header>
      </div>

      <main>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}
