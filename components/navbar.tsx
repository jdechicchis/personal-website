import Image from "next/image";
import Link from "next/link";
import IconHamburger from "./icons/hamburger";
import IconXMark from "./icons/xmark";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="static h-20 w-full bg-white shadow-md">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={40}
              width={40}
              alt="A photo of Joseph"
            />
          </Link>
          {/*<p className="text-xl pl-2 font-medium">Joseph DeChicchis</p>*/}
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-4">
            <Link href="/">
              <li className="text-xl hover:border-b">Home</li>
            </Link>
            <Link href="/posts">
              <li className="text-xl hover:border-b">Blog</li>
            </Link>
            <Link href="/repos">
              <li className="text-xl hover:border-b">Repos</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer sm:hidden">
          <IconHamburger />
        </div>
        <div
          className={
            menuOpen
              ? "fixed right-0 top-0 h-screen w-[65%] bg-gray-50 p-10 duration-500 ease-in sm:hidden"
              : "fixed right-[-100%] top-0 h-screen w-[65%] bg-gray-50 p-10 duration-500 ease-in sm:hidden"
          }
        >
          <div className="flex w-full items-center justify-start">
            <div onClick={handleNav} className="cursor-pointer sm:hidden">
              <IconXMark />
            </div>
          </div>
          <ul className="flex-col py-4">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 text-xl hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/posts">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 text-xl hover:border-b"
              >
                Blog
              </li>
            </Link>
            <Link href="/repos">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 text-xl hover:border-b"
              >
                Repos
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
