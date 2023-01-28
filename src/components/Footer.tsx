"use client";

import React, { SyntheticEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCall, MdSend } from "react-icons/md";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import panaverseLogo from "@/images/panaverse-logo.png";
import saylaniLogo from "@/images/saylaniwelfare.png";
import panacloudLogo from "@/images/panacloud.jpg";
import piaicLogo from "@/images/piaic-logo.svg";
import EnrollBtn from "./EnrollBtn";

const Footer = () => {
  const newsletterSignup = (e: SyntheticEvent) => {
    e.preventDefault();
    alert("Coming soon!");
  };

  return (
    <>
      <footer className="px-4 lg:px-0 py-24 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="w-full lg:w-1/3">
            <Link href="/" className="flex items-center font-bold text-xl">
              <Image
                src={panaverseLogo}
                alt="logo"
                className="w-12 h-auto mr-2"
              />{" "}
              Panaverse DAO
            </Link>
            <h2 className="font-bold text-2xl mt-6">
              Advancing Technology for a Better Internet
            </h2>
            <p className="mt-3 text-lg">
              Become a Certified Developer and Earn While You Learn
            </p>
            <EnrollBtn className="mt-6" />

            <div className="flex mt-6 gap-6">
              <a
                href="https://github.com/panaverse"
                className="btn aspect-square block w-fit !p-3 secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.gg/jEDHUZcD"
                className="btn aspect-square block w-fit !p-3 secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.youtube.com/@panaverse"
                className="btn aspect-square block w-fit !p-3 secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/groups/panaverse"
                className="btn aspect-square block w-fit !p-3 secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/Panaverse_edu"
                className="btn aspect-square block w-fit !p-3 secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>

            <a
              href="tel:+923082220203"
              className="btn secondary flex items-center justify-center mt-6 w-fit"
            >
              <MdCall className="mr-2" />
              +923082220203
            </a>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col lg:items-center gap-6 justify-between">
            <p className="text-lg font-bold lg:text-center">
              Strategic Partners
            </p>
            <Image src={piaicLogo} alt="PIAIC" width={72} />
            <Image src={panacloudLogo} alt="PIAIC" width={72} />
            <Image src={saylaniLogo} alt="PIAIC" width={72} />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <p className="text-lg font-bold">Newsletter</p>
            <form method="post" className="flex gap-3 w-full mt-3">
              <input
                type="email"
                placeholder="Email"
                className="btn !p-3 !bg-white !font-normal w-full ring-0 focus:ring-0 outline-0"
                required
              />
              <button
                className="btn !aspect-square block w-fit !p-3 secondary"
                onClick={newsletterSignup}
              >
                <MdSend />
              </button>
            </form>
            <p className="text-lg font-bold mt-6">Navigation</p>
            <ul className="mt-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a
                  href="https://portal.piaic.org/signup"
                  target="_blank"
                  rel="noreferrer"
                >
                  Enroll Today
                </a>
              </li>
              <li>
                <a
                  href="https://www.piaic.org/howitworks"
                  target="_blank"
                  rel="noreferrer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/courses/ai">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="/courses/cloud">
                  Cloud Native and Mobile Web Computing
                </Link>
              </li>
              <li>
                <Link href="/courses/metaverse">Metaverse</Link>
              </li>
              <li>
                <Link href="/courses/iot">Internet Of Things</Link>
              </li>
              <li>
                <a
                  href="https://www.piaic.org/about"
                  target="_blank"
                  rel="noreferrer"
                >
                  About The President
                </a>
              </li>
              <li>
                <a
                  href="https://www.piaic.org/wit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Women Inclusion in Technology (WIT)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="text-sm">
        <div className="container mx-auto flex items-center justify-between my-6 flex-col lg:flex-row">
          <span>Panaverse Decentralized Autonomous Organization</span>
          <span>
            &copy;{" "}
            <a
              href="https://linkedin.com/in/raahimfareed/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Raahim Fareed
            </a>{" "}
            2023
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
