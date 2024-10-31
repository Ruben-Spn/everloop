import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white bg-black font-poppins w-full min-h-screen flex flex-col items-center justify-start">
      <nav className="w-4/5 drop-shadow-nav bg-mauve-100/[.15] p-4 rounded-full flex items-center justify-between">
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
      <header></header>
      <main>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}
