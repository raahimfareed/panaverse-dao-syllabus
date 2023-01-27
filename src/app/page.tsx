"use client";
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

import Nav from "@/components/Nav";
import EnrollBtn from "@/components/EnrollBtn";

import panaverseLogo from "@/images/panaverse-logo.png";
import virtualRealityImg from "@/images/virtual-reality-undraw.png";
import saylaniLogo from "@/images/saylaniwelfare.png";
import panacloudLogo from "@/images/panacloud.jpg";
import piaicLogo from "@/images/piaic-logo.svg";
import { SyntheticEvent } from "react";

const Index = () => {
  const newsletterSignup = (e: SyntheticEvent) => {
    e.preventDefault();
    alert("Coming soon!");
  };
  return (
    <>
      <Nav />
      <section className="px-4 lg:px-0 py-24 min-h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="container mx-auto flex items-center flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="left">
            <h4 className="tracking-[.1rem] text-primary text-sm">
              &lt;Panaverse DAO /&gt;
            </h4>
            <h1 className="font-black text-4xl lg:text-5xl">
              Advancing Technology for a Better Internet
            </h1>
            <p className="mt-6 text-xl">
              Become a Certified Developer and Earn While You Learn
            </p>
            <div className="mt-6 flex md:items-center gap-4 flex-col md:flex-row">
              <a
                href="https://portal.piaic.org/signup"
                className="btn flex items-center justify-center"
              >
                Enroll Today
              </a>
              <Link
                href=""
                className="btn secondary flex items-center justify-center"
              >
                View Courses
              </Link>
            </div>
          </div>
          <div className="right flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={virtualRealityImg.src}
              alt="Virtual Reality"
              className="w-full xl:min-w-[600px]"
            />
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-0 py-24 bg-gradient-to-br from-[#267871] to-[#136A8A] text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl lg:text-4xl font-bold">
            The Program in a Nutshell: Earn While You Learn
          </h2>
          <p className="text-xl lg:text-2xl mt-6">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold mt-8">
            Program Attributes
          </h3>
          <ul className="list-disc text-xl lg:text-2xl pl-8 mt-3">
            <li>Earn while you learn</li>
            <li>For beginners and professionals both</li>
            <li>Development from ground up</li>
            <li>On Site and Online classes both</li>
            <li>Hands-on learning experience</li>
            <li>VOD Lectures</li>
            <li>Includes full stack web development</li>
          </ul>
          <EnrollBtn className="mt-6" />
        </div>
      </section>
      <section className="px-4 lg:px-0 py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl lg:text-4xl font-bold">
            Top Programs
          </h2>
          <div className="flex items-stretch justify-center gap-12 my-12 flex-col lg:flex-row">
            <div className="card w-full lg:w-1/3">
              <h4>Web 3.0 (Blockchain) and Metaverse Specialization</h4>
              <p>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <Link href="">Read More &gt;</Link>
            </div>
            <div className="card w-full lg:w-1/3">
              <h4>
                Artificial Intelligence (AI) and Deep Learning Specialization
              </h4>
              <p>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </p>
              <Link href="">Read More &gt;</Link>
            </div>
            <div className="card w-full lg:w-1/3">
              <h4>Cloud-Native Computing Specialization</h4>
              <p>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </p>
              <Link href="">Read More &gt;</Link>
            </div>
          </div>
          <Link className="btn ml-auto block w-fit" href="">
            View All Courses
          </Link>
        </div>
      </section>
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
                href=""
                className="btn aspect-square block w-fit !p-3 secondary"
              >
                <FaGithub />
              </a>
              <a
                href=""
                className="btn aspect-square block w-fit !p-3 secondary"
              >
                <FaDiscord />
              </a>
              <a
                href=""
                className="btn aspect-square block w-fit !p-3 secondary"
              >
                <FaYoutube />
              </a>
              <a
                href=""
                className="btn aspect-square block w-fit !p-3 secondary"
              >
                <FaFacebook />
              </a>
              <a
                href=""
                className="btn aspect-square block w-fit !p-3 secondary"
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
            <form action="" className="flex gap-3 w-full mt-3">
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
                <Link href="">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="">Cloud Native and Mobile Web Computing</Link>
              </li>
              <li>
                <Link href="">Blockchain</Link>
              </li>
              <li>
                <Link href="">Internet Of Things</Link>
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
    </>
  );
};

export default Index;
