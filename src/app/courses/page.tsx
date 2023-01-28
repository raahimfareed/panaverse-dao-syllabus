"use client";
import EnrollBtn from "@/components/EnrollBtn";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDownload } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

interface iCourse {
  path: string;
  name: string;
  description: string;
}

const Courses = () => {
  const router = useRouter();
  const courses: iCourse[] = [
    {
      path: "metaverse",
      name: "Web 3.0 (Blockchain) and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    },
    {
      path: "ai",
      name: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    },
    {
      path: "cloud",
      name: "Cloud-Native Computing Specialization",
      description:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    },
    {
      path: "iot",
      name: "Ambient Computing and IoT Specialization",
      description:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.",
    },
    {
      path: "genomics",
      name: "Genomics and Bioinformatics Specialization",
      description:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    },
    {
      path: "automation",
      name: "Network Programmability and Automation Specialization",
      description:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    },
  ];

  return (
    <>
      <section className="px-4 lg:px-0 py-24">
        <div className="container mx-auto">
          <h2 className="font-black text-4xl lg:text-5xl">Courses</h2>
          <p className="mt-3">
            We have a variety of courses to offer which can help you learn
            valuable skills and start earning while you learn!
          </p>
          <div className="flex gap-3 flex-wrap">
            <EnrollBtn className="mt-3" />
            <a
              href="/manifesto.pdf"
              className="btn flex items-center w-fit secondary mt-3"
              download
            >
              <MdDownload className="mr-2" />
              Download Manifesto
            </a>
          </div>
          <div className="gap-12 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={uuidv4()}
                className="card w-full"
                onClick={() => router.push(`/courses/${course.path}`)}
              >
                <h4>{course.name}</h4>
                <p>{course.description}</p>
                <a>Read More &gt;</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
