"use client";
import EnrollBtn from "@/components/EnrollBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Data = {
  name: string;
  description: string;
  q4: {
    name: string;
    duration: number;
    description: string;
    outline: { item: string; url?: string }[];
    projects: {
      item: string;
      url?: string;
    }[];
  };
  q5: {
    name: string;
    duration: number;
    description: string;
    outline: { item: string; url?: string }[];
    projects: {
      item: string;
      url?: string;
    }[];
  };
};

const Course = ({
  params,
}: {
  params: {
    course: string;
  };
}) => {
  const router = useRouter();
  let course = getCourse(params.course);

  if (course === null) {
    return 404;
  }

  return (
    <>
      <section className="px-4 lg:px-0 py-24">
        <div className="container mx-auto">
          <h1 className="font-black text-4xl lg:text-5xl">{course.name}</h1>
          <p className="mt-3">{course.description}</p>
          <div className="flex gap-3 flex-wrap">
            <EnrollBtn className="mt-3" />
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter I</h2>
            <h3 className="font-bold text-xl lg:text-2xl mt-3">
              CS-101: Object-Oriented Programming using TypeScript
            </h3>
            <h3 className="text-xl lg:text-2xl">Duration: 13 Weeks</h3>
            <strong className="block mt-3">Description</strong>
            <p>
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript. We
              will also understand the latest Web trends i.e. Web 3.0 and
              Metaverse concepts and try to understand their working from the
              perspective of the users.
            </p>
            <strong className="block mt-3">Outline</strong>
            <ol className="list-decimal pl-8">
              <li className="mb-2">
                <ul>
                  <li>HTML and CSS</li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learn HTML by Hira Khan (Watch Recorded Videos)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>Web 3.0 and Metaverse Theory</li>
                  <li>
                    <a
                      href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Introduction to Panaverse DAO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Web 3.0 User Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Virtual and Augmented Metaverse User Guide
                    </a>
                  </li>
                  <li>
                    Complete Web 3 Assignments included in the Web 3 User Guide
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>
                    Fundamentals of JavaScript (
                    <a
                      href="https://262.ecma-international.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      ECMAScript 2022 Language Specification
                    </a>
                    )
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learn JavaScript By Zeeshan Hanif (Recorded Videos)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Chapters 2-6, 13 of JavaScript from Beginner to
                      Professional: Learn JavaScript quickly by building fun,
                      interactive, and dynamic web apps, games, and pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      JavaScript Book Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Getting Started Exercises with JavaScript and Node.js
                    </a>
                  </li>
                  <li>
                    Fundamentals of JavaScript and Node.js Quiz
                    <ol
                      style={{ listStyleType: "upper-alpha" }}
                      className="pl-12"
                    >
                      <li>
                        Background of JavaScript and How to use JavaScript in
                        Browser
                      </li>
                      <li>
                        Variables, Primitive data types Analyzing and modifying
                        data types, and Operators (Chapter 2 of JavaScript from
                        Beginner to Professional)
                      </li>
                      <li>
                        <a
                          href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          Intro to Node.js, .mjs files, Modules, NPM, import,
                          export, and using external modules with npm
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          How to accept user input in your Node.js JavaScript
                          programs, this will allow us to create interactive
                          Node.js console programs using prompt-sync library.
                          The last example in this presentation shows you how to
                          use prompt-sync library in your Node.js programs
                        </a>
                        <br />
                        Note: After this point, we will do all our class work
                        and exercises using Node.js in .mjs files. We will also
                        be able to develop interactive Node.js console programs
                        which will greatly help the students to learn.
                      </li>
                      <li>
                        Using Arrays and Objects in Node.js Programs (chapter 3
                        of JavaScript from Beginner to Professional)
                      </li>
                      <li>
                        Using if and if else statements, else if statements,
                        Conditional ternary operators, and switch statements in
                        Node.js programs (chapter 4 of JavaScript from Beginner
                        to Professional)
                      </li>
                      <li>
                        Using while loop, do while loop, for loop, for in, and
                        for of loop in Node.js (chapter 5 of JavaScript from
                        Beginner to Professional)
                      </li>
                      <li>
                        Using Basic functions, Function arguments, Return,
                        Variable scope in functions, Recursive functions, Nested
                        functions, Anonymous functions, and Function callbacks
                        in Node.js (chapter 6 of JavaScript from Beginner to
                        Professional)
                      </li>
                      <li>
                        Using Concurrency, Callbacks, Promises, async / await,
                        and Event loop (chapter 13 of JavaScript from Beginner
                        to Professional)
                      </li>
                      <li>
                        <a
                          href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          JavaScript promises, mastering the asynchronous
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          New JavaScript Features in ECMAScript 2021 and 2022
                        </a>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>Object-Oriented Programming with TypeScript</li>
                  <li>
                    <a
                      href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Chapters 1-11 of Learning TypeScript: Enhance Your Web
                      Development Skills Using Type-Safe JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/panaverse/learn-typescript"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learning Repository{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.learningtypescript.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      In Class Companion projects and articles for Learning
                      TypeScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/panaverse/typescript-node-projects"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Homework Project
                    </a>
                  </li>
                  <li>Fundamentals of TypeScript Quiz</li>
                  <li>TypeScript Professional Proficiency Quiz</li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>TypeScript for React</li>
                  <li>
                    <a
                      href="https://profy.dev/article/react-typescript"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Minimal TypeScript Crash Course For React With Interactive
                      Code Exercises
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter Break</h2>
            <p>During the Quarter Break, we do following Assignments</p>
            <ol className="list-decimal pl-8">
              <li>
                <a
                  href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Record a Presentation on Cloud To Edge
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Create Todo App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Replicate Pricing UI
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Build Panaverse DAO Website from Manifesto
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Build PIAIC Website from Manifesto and Existing PIAIC Website
                </a>
              </li>
              <li>
                <ul>
                  <li>Fundamentals of Version Control</li>
                  <li>
                    <a
                      href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Version Control using Git and GitHub By Sir Zeeshan Hanif
                      (Recorded Videos)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.github.com/articles/markdown-basics/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Markdown Basics
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Basic Differences
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Rebasing
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Tracking Branches
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://try.github.io/levels/1/challenges/1"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Practice
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Homework
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Git Cheatsheet
                    </a>
                  </li>
                </ul>
              </li>
              <li>Git Quiz</li>
              <li>TypeScript Proficiency Quiz</li>
            </ol>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter II</h2>
            <h3 className="font-bold text-xl lg:text-2xl mt-3">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and
              APIs
            </h3>
            <h3 className="text-xl lg:text-2xl">Duration: 13 Weeks</h3>
            <strong className="block mt-3">Description</strong>
            <p>
              The objective of this course is to teach participants to develop
              customer-facing planet-scale Websites, Full-Stack Apps and
              templates, Dashboards, and Muti-Cloud Serverless APIs. By the end
              of the quarter, the participants will be able to develop and
              deploy web platforms like Facebook, Shopify, etc. The technologies
              covered in this course will include Next.js 13, Figma, Tailwind
              CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless
              (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud
              Development Kit for Terraform (CDKTF).
            </p>
            <strong className="block mt-3">Outline</strong>
            <ol className="list-decimal pl-8">
              <li className="mb-2">
                <ul>
                  <li>Next.js 13 Web Development</li>
                  <li>
                    <a
                      href="https://beta.nextjs.org/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Next 13 Official Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://beta.reactjs.org/learn"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Latest Learn React Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/panaverse/learn-nextjs"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learn Next.js 13 Learning Repo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>Next.js 13 using Chakra UI (Remote Zoom Class)</li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      CSS Flexbox Explained - Complete Guide to Flexible
                      Containers and Flex Items
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chakra-ui.com/getting-started"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Chakra UI Docs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Designing and Prototyping Interfaces with Figma: Learn
                      essential UX/UI design principles by creating interactive
                      prototypes for mobile, tablet, and desktop by Fabio
                      Staiano
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/community/file/768809027799962739"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Figma Design Kit for TailwindCSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/community/file/971408767069651759"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Chakra UI Figma Kit
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>API Routes with Next.js (Remote Zoom Class)</li>
                  <li>
                    <a
                      href="https://nextjs.org/docs/api-routes/introduction"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      API Routes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>APIs with Next.js and tRPC (Remote Zoom Class)</li>
                  <li>
                    <a
                      href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Build a tRPC CRUD API Example with Next.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Stop building REST APIs for your Next.js apps, use tRPC
                      instead
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>SQL and Prisma</li>
                  <li>
                    <a
                      href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Start from scratch with relational databases
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=5hzZtqCNQKk"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      SQL For Beginners Video Tutorial
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Database Management Systems and SQL – Tutorial for
                      Beginners
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>Next.js 13 using TailwindCSS (Remote Zoom Class)</li>
                  <li>
                    <a
                      href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Modern CSS with Tailwind, Second Edition by Noel Rappin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>AWS Application Composer (Remote Zoom Class)</li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=BujE_tik5r8"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      What is AWS Application Composer?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=p411uh363jQ"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Event-driven apps with AWS Application Composer
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://aws.amazon.com/application-composer/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Visually design and build serverless applications quickly
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://aws.amazon.com/free/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Create Free AWS Account
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <ul>
                  <li>
                    Multi-Cloud GraphQL Serverless API Development with Cloud
                    Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                  </li>
                  <li>
                    <a
                      href="https://github.com/panaverse/learn-multicloud-api-development"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Learn Multicloud Serverless API Development using CDK
                      Terraform in Baby Steps
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
            <strong className="block mt-3">Projects</strong>
            <ol className="list-decimal pl-8">
              <li>
                <a
                  href="https://github.com/panaverse/nextjs-projects"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Next.js Projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/panaverse/styling-nextjs-projects"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Styling Next.js Projects using TailwindCSS and Chakra UI
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ogzhanolguncu/min-todo"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Todo Full-Stack App
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=nzJsYJPCc80"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Build a Twitter Clone
                </a>
              </li>
            </ol>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter III</h2>
            <h3 className="font-bold text-xl lg:text-2xl mt-3">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
            </h3>
            <h3 className="text-xl lg:text-2xl">Duration: 13 Weeks</h3>
            <strong className="block mt-3">Earn While You Learn</strong>
            <ol className="pl-8" style={{ listStyleType: "upper-alpha" }}>
              <li className="mb-2">
                Build Full-Stack Next.js 13 Jamstack Templates
                <p>
                  You will be assigned to build a template which we will sell on
                  Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                  will receive 25% share on the sale of the template which will
                  be used to manage the platform. An additional 15% will be
                  spent on marketing the template. 60% of the revenues will be
                  distributed to the developer through the Panaverse DAO in the
                  form of Panaverse tokens.
                </p>
                <a
                  href="https://github.com/panaverse/panaverse-template-standard"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  The Template Standard
                </a>
              </li>
              <li className="mb-2">
                Build QraphQL APIs
                <p>
                  You will be assigned to build APIs for which you will sell
                  subscriptions on the Panaverse DAO Marketplace. The Panaverse
                  DAO will receive 25% share on the sale of the template which
                  will be used to manage the platform. An additional 15% will be
                  spent on marketing the template. 60% of the revenues will be
                  distributed to the developer through the Panaverse DAO in the
                  form of Panaverse tokens.
                </p>
              </li>
            </ol>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter IV</h2>
            <h3 className="font-bold text-xl lg:text-2xl mt-3">
              {course.q4.name}
            </h3>
            <h3 className="text-xl lg:text-2xl">
              Duration: {course.q4.duration} Weeks
            </h3>
            <strong className="block mt-3">Description</strong>
            <p>{course.q4.description}</p>
            <strong className="block mt-3">Outline</strong>
            <ol className="list-decimal pl-8">
              {course.q4.outline.map((item) => (
                <li key={uuidv4()}>
                  <a
                    href={item.url}
                    target={item.url !== undefined ? "_blank" : undefined}
                    rel={item.url !== undefined ? "noreferrer" : undefined}
                    className={item.url !== undefined ? "underline" : undefined}
                  >
                    {item.item}
                  </a>
                </li>
              ))}
            </ol>
            {course.q4.projects.length > 0 ? (
              <strong className="block mt-3">Projects</strong>
            ) : (
              <></>
            )}
            <ol className="list-decimal pl-8">
              {course.q4.projects.map((item) => (
                <li key={uuidv4()}>
                  <a
                    href={item.url}
                    target={item.url !== undefined ? "_blank" : undefined}
                    rel={item.url !== undefined ? "noreferrer" : undefined}
                    className={item.url !== undefined ? "underline" : undefined}
                  >
                    {item.item}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12">
            <h2 className="font-bold text-3xl lg:text-4xl">Quarter V</h2>
            <h3 className="font-bold text-xl lg:text-2xl mt-3">
              {course.q5.name}
            </h3>
            <h3 className="text-xl lg:text-2xl">
              Duration: {course.q5.duration} Weeks
            </h3>
            <strong className="block mt-3">Description</strong>
            <p>{course.q5.description}</p>
            <strong className="block mt-3">Outline</strong>
            <ol className="list-decimal pl-8">
              {course.q5.outline.map((item) => (
                <li key={uuidv4()}>
                  <a
                    href={item.url}
                    target={item.url !== undefined ? "_blank" : undefined}
                    rel={item.url !== undefined ? "noreferrer" : undefined}
                    className={item.url !== undefined ? "underline" : undefined}
                  >
                    {item.item}
                  </a>
                </li>
              ))}
            </ol>
            {course.q5.projects.length > 0 ? (
              <strong className="block mt-3">Projects</strong>
            ) : (
              <></>
            )}
            <ol className="list-decimal pl-8">
              {course.q5.projects.map((item) => (
                <li key={uuidv4()}>
                  <a
                    href={item.url}
                    target={item.url !== undefined ? "_blank" : undefined}
                    rel={item.url !== undefined ? "noreferrer" : undefined}
                    className={item.url !== undefined ? "underline" : undefined}
                  >
                    {item.item}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <EnrollBtn />
            <Link href="/courses" className="btn w-fit block secondary">
              View Other Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const getCourse = (name: string): Data | null => {
  const courses: { [name: string]: Data } = {
    metaverse: {
      name: "Web 3 and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      q4: {
        name: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        duration: 13,
        description:
          "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
        outline: [
          { item: "Blockchain and Metaverse Theory" },
          {
            item: "Smart Contract Development in Solidity",
            url: "https://github.com/panaverse/defi-dapps-solidity-smart-contracts",
          },
          {
            item: "Dapp Development using Ethers.js and Next.js 13",
            url: "https://github.com/panaverse/dapps-nextjs",
          },
          { item: "Tokennomics" },
        ],
        projects: [
          { item: "Create a Pako Token" },
          { item: "Develop Crowd Sale Contract" },
          { item: "Trying it with MetaMask" },
          {
            item: "Trying it with Multisignature Wallets",
            url: "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/",
          },
          {
            item: "Sending Tokens using Ethers.js",
            url: "https://ethereum.org/en/developers/tutorials/send-token-etherjs/",
          },
          {
            item: "Create, Deploy, Mint, and Sell an NFT",
            url: "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/",
          },
        ],
      },
      q5: {
        name: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        duration: 13,
        description:
          "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.",
        outline: [
          {
            item: "Open Metaverse Web Development",
            url: "https://github.com/panaverse/metaverse-web",
          },
          {
            item: "Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
            url: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
          },
          {
            item: "Build a 3D Donut using Blender 3",
            url: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
          },
          {
            item: "Build a Viking Scene using Blender 3",
            url: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
          },
          {
            item: "Modeling a Time Machine using Blender 3",
            url: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
          },
          {
            item: "Illustrating an Alien Hero with Grease Pencil",
            url: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
          },
          {
            item: "Build a 3D Sword in the Stone using Blender 3",
            url: "https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561",
          },
        ],
        projects: [],
      },
    },
    ai: {
      name: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      q4: {
        name: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        duration: 13,
        description: `Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.

        We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI's powerful models and Next.js 13.

        We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.`,
        outline: [
          { item: "Introduction to Machine Learning, Data Science, and AI" },
          { item: "AI for everyone quiz in week 3" },
          {
            item: "Python Crash Course  for TypeScript Developers",
            url: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5",
          },
        ],
        projects: [
          {
            item: "Building Next-Gen Intelligent Apps with OpenAI's Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13",
            url: "https://openai.com/api/",
          },
        ],
      },
      q5: {
        name: "AI-361: Deep Learning and MLOps",
        duration: 13,
        description:
          "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.",
        outline: [
          {
            item: "Deep Learning with Tensorflow",
            url: "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2",
          },
          {
            item: "Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
            url: "https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351",
          },
        ],
        projects: [],
      },
    },
    cloud: {
      name: "Cloud-Native Computing Specialization",
      description:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      q4: {
        name: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        duration: 13,
        description: `Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.

        These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.

        Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.`,
        outline: [
          {
            item: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
            url: "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3",
          },
          {
            item: "Cloud Development Kit for Kubernetes",
            url: "https://cdk8s.io/",
          },
        ],
        projects: [],
      },
      q5: {
        name: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        duration: 13,
        description: `Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.

          Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.`,
        outline: [
          {
            item: "CDK for Terraform",
            url: "https://developer.hashicorp.com/terraform/cdktf",
          },
        ],
        projects: [],
      },
    },
    iot: {
      name: "Ambient Computing and IoT Specialization",
      description:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.",
      q4: {
        name: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        duration: 13,
        description: `Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.

        If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.

        Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.

        In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.`,
        outline: [
          {
            item: "Alexa Skill Developement",
            url: "https://developer.amazon.com/en-US/alexa",
          },
          {
            item: "Alexa with Matter Protocol",
            url: "https://developer.amazon.com/en-US/alexa/matter",
          },
        ],
        projects: [],
      },
      q5: {
        name: "AC-361: Embedded Programming using C and Rust",
        duration: 13,
        description: `This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.`,
        outline: [
          {
            item: "Introduction to the Internet of Things and Embedded Systems",
            url: "https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar",
          },
          {
            item: "Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3",
          },
          {
            item: "The C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266",
            url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
          },
          {
            item: "Introduction to C Part 1",
          },
          {
            item: "Introduction to C Part 2",
          },
          {
            item: "Introduction to Embedded systems Part 1",
          },
          {
            item: "Mid-Term II: C Programming Quiz 1 in Week 9",
          },
          {
            item: "Introduction to Embedded systems Part 2",
          },
          {
            item: "Embedded Programming using Rust",
            url: "https://www.rust-lang.org/what/embedded",
          },
        ],
        projects: [],
      },
    },
    genomics: {
      name: "Genomics and Bioinformatics Specialization",
      description:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      q4: {
        name: "Bio-351: Python for Biologists",
        duration: 13,
        description:
          "This course will focus on learning the basics of the Python programming language through genomics examples.",
        outline: [
          {
            item: "Textbook",
            url: "https://www.pythonforbiologists.org/",
          },
        ],
        projects: [],
      },
      q5: {
        name: "Bio-361: Bioinformatics with Python",
        duration: 13,
        description:
          "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
        outline: [
          {
            item: "Textbook",
            url: "https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1",
          },
        ],
        projects: [],
      },
    },
    automation: {
      name: "Network Programmability and Automation Specialization",
      description:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      q4: {
        name: "NPA-351: CCNA 200-301 Certification",
        duration: 13,
        description:
          "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
        outline: [
          {
            item: "Textbook",
            url: "https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1",
          },
        ],
        projects: [],
      },
      q5: {
        name: "NPA-361: Network Programmability and Automation",
        duration: 13,
        description:
          "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
        outline: [
          {
            item: "Textbook",
            url: "https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3",
          },
        ],
        projects: [],
      },
    },
  };

  return courses[name] ?? null;
};

export default Course;
