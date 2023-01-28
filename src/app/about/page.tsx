"use client";
import EnrollBtn from "@/components/EnrollBtn";
import Image from "next/image";

import daniyalNagori from "@/images/daniyalnagori.jpg";
import ziaKhan from "@/images/ziakhan.jpg";

interface iCourse {
  path: string;
  name: string;
  description: string;
}

const Courses = () => {
  return (
    <>
      <section className="px-4 lg:px-0 py-24">
        <div className="container mx-auto">
          <h2 className="font-black text-4xl lg:text-5xl">About</h2>
          <p className="mt-3">
            Panaverse DAO is lead by Zia Khan who is the acting Chief Executive
            Officer of Panacloud (Pvt.) Ltd. He also the volunteer Chief
            Operating Officer of Presidential Initiative for AI and Computing
            (PIAIC) which is endorsed by the President Arif Alvi
          </p>
          <p className="mt-3">
            Along with Zia Khan, the program is lead by Daniyal Nagori who is
            the Chief Executive Officer of PIAC and the software lead for
            Panacloud.
          </p>
          <p className="mt-3">
            The aim of this program is prepare students for the IT industry by
            providing them with invaluable resources and opportunities. This is
            done by helping them grow with all the necessary resources and
            helping them earn dollars as they learn. By preparing the students
            for the IT industry and turning them into leaders, Panaverse aims to
            rid the financial deficit and balance the exports of the country
            with the help of the students in the IT sector.
          </p>
          <p className="mt-3">
            Each program is usually 13 weeks long with 4 quarters. First three
            quarters of each program are general where the students learn Web
            2.0 and the necessary technologies to start earning money. Following
            the first three quarters, specific courses depending on the program
            start
          </p>
          <p className="mt-3">
            All material of panaverse is open source and publicly available on
            Github. This is solely to improve Pakistan and not bar anyone from
            education as education is a basic human right. Moreover, all funds
            are managed by Panaverse&apos;s strategic partner Saylani Welfare
            which is one of the most trusted NGOs of Pakistan. Saylani has
            strict audit processes already in place to ensure proper
            accountability of funds.
          </p>
          <h3 className="font-bold mt-12 lg:text-center text-xl">
            Lead Members
          </h3>
          <div className="flex mt-6 items-center justify-evenly flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="rounded-full p-2 bg-white overflow-hidden">
                <Image
                  src={ziaKhan}
                  width={128}
                  alt="Zia Khan"
                  className="rounded-full"
                />
              </div>
              <strong>Zia Khan</strong>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="rounded-full p-2 bg-white overflow-hidden">
                <Image
                  src={daniyalNagori}
                  width={128}
                  alt="Daniyal Nagori"
                  className="rounded-full"
                />
              </div>
              <strong>Daniyal Nagori</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
