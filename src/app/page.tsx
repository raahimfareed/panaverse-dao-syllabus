"use client";

import Link from "next/link";
import EnrollBtn from "@/components/EnrollBtn";

import virtualRealityImg from "@/images/virtual-reality-undraw.png";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  return (
    <>
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
                href="courses"
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
            <div
              className="card w-full lg:w-1/3"
              onClick={() => router.push("/courses/metaverse")}
            >
              <h4>Web 3.0 (Blockchain) and Metaverse Specialization</h4>
              <p>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <a>Read More &gt;</a>
            </div>
            <div
              className="card w-full lg:w-1/3"
              onClick={() => router.push("/courses/ai")}
            >
              <h4>
                Artificial Intelligence (AI) and Deep Learning Specialization
              </h4>
              <p>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </p>
              <a>Read More &gt;</a>
            </div>
            <div
              className="card w-full lg:w-1/3"
              onClick={() => router.push("/courses/cloud")}
            >
              <h4>Cloud-Native Computing Specialization</h4>
              <p>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </p>
              <a>Read More &gt;</a>
            </div>
          </div>
          <Link className="btn ml-auto block w-fit" href="courses">
            View All Courses
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
