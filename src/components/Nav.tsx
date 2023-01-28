import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import panaverseLogo from "@/images/panaverse-logo.png";
import { MdClose, MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const pathname = usePathname();
  const path = pathname?.split("/").filter((n) => n) ?? [];

  useEffect(() => close(), [pathname]);

  return (
    <nav className="w-full bg-white py-8 px-4 lg:px-0 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between lg:justify-start">
        <Link href="/" className="flex items-center font-bold text-xl">
          <Image src={panaverseLogo} alt="logo" className="w-12 h-auto mr-2" />{" "}
          Panaverse DAO
        </Link>
        <ul
          className={
            "z-20 bg-white fixed inset-0 flex items-center justify-center flex-col lg:flex-row lg:static gap-6 -translate-x-full lg:translate-x-0 transition lg:ml-12" +
            (isOpen === true ? " translate-x-0" : "")
          }
        >
          <MdClose
            className="absolute top-14 right-4 text-xl cursor-pointer lg:hidden"
            onClick={close}
          />
          <Link
            href="/"
            className="flex items-center font-bold text-xl lg:hidden"
          >
            <Image
              src={panaverseLogo}
              alt="logo"
              className="w-12 h-auto mr-2"
            />{" "}
            Panaverse DAO
          </Link>
          <li>
            <Link
              href="/"
              className={path.length == 0 ? "font-bold" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className={path[0] == "courses" ? "font-bold" : undefined}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={path[0] == "about" ? "font-bold" : undefined}
            >
              About
            </Link>
          </li>
          <li className="lg:hidden">
            <a
              href="https://portal.piaic.org/signup"
              className="btn block w-fit lg:hidden"
            >
              Enroll Today
            </a>
          </li>
        </ul>
        <MdMenu className="text-xl cursor-pointer lg:hidden" onClick={open} />
        <a
          href="https://portal.piaic.org/signup"
          className="btn w-fit ml-auto hidden lg:block"
        >
          Enroll Today
        </a>
      </div>
    </nav>
  );
};

export default Nav;
