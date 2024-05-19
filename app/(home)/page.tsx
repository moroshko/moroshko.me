import type { Metadata } from "next";
import Image from "next/image";
import profilePic from "../../public/images/misha.jpeg";
import { Main } from "../components/Main/Main";
import { PageLink } from "../components/PageLink/PageLink";
import { About } from "./components/About/About";

export const metadata: Metadata = {
  title: "Misha Moroshko",
  description: "Personal site of Misha Moroshko",
};

const HomePage = () => {
  return (
    <Main>
      <div className="space-y-8">
        <Image
          className="rounded-full size-32 grayscale hover:grayscale-0 transition-[filter]"
          src={profilePic}
          alt="Profile image of Misha Moroshko"
          placeholder="blur"
        />
        <About />
        <div className="flex justify-end">
          <PageLink href="/work" direction="right">
            Work
          </PageLink>
        </div>
      </div>
    </Main>
  );
};

export default HomePage;
