import Image from "next/image";
import profilePic from "../public/images/misha.jpeg";
import { WorkItem } from "./components/WorkItem";

const HomePage = () => {
  return (
    <main className="mx-auto max-w-lg py-6 text-gray-700 px-6 space-y-8 xs:px-12 min-h-dvh bg-white xs:border-x xs:border-gray-200">
      <Image
        className="rounded-full size-32"
        src={profilePic}
        alt="Picture of Misha Moroshko"
        placeholder="blur"
      />
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800">About</h2>
        <p>
          I’m a Front End engineer from Melbourne, Australia 🇦🇺
          <br />I love building web stuff that bring people joy.
        </p>
        <p>
          I care a lot about visual design, UX, accessibility and performance.
          Design Systems and Open Source have a special place in my heart.
        </p>
        <p>
          I like collaborating with kind, like-minded individuals who are
          constantly learning.
        </p>
        <p>
          I feel productive these days with TypeScript, Tailwind, and Next.js
          deployed on Vercel.
        </p>
        <p>
          When not coding, I recharge through playing chess to exercise my mind,
          playing tennis to stay active, and spending quality time with my
          loving family.
        </p>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-800">Work</h2>
        <WorkItem
          company="Surreal"
          companyUrl="https://surreal.live"
          years="Sep 2021 – Present"
        >
          Leading the Front End engineering of the new scheduling and booking
          platform and the Surreal Design System.
        </WorkItem>
        <WorkItem
          company="Latitude"
          companyUrl="https://latitudefinancial.com.au"
          years="Aug 2019 – Sep 2021"
        >
          Managed a team of 4 engineers to rebuild the new Latitude Service
          Centre. Created the Basis Design System and helped teams across the
          company to adopt it.
        </WorkItem>
        <WorkItem company="Facebook" years="Nov 2016 – May 2019">
          Co-founded a new data annotation platform on the Computer Vision team.
          Designed and built from scratch multiple annotation tools, and worked
          with 20+ teams across Facebook to improve the platform.
        </WorkItem>
        <WorkItem
          company="SEEK"
          companyUrl="https://seek.com.au"
          years="Feb 2014 – Sep 2016"
        >
          Worked on the rebuild of the core job search experience and the Talent
          Search platform.
        </WorkItem>
      </div>
    </main>
  );
};

export default HomePage;
