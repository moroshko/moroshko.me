import type { Metadata } from "next";
import Image from "next/image";
import profilePic from "../../public/images/misha.jpeg";
import { Main } from "../components/Main/Main";
import { About } from "./components/About/About";

export const metadata: Metadata = {
  title: "Misha Moroshko",
  description: "Home page of Misha Moroshko",
};

const HomePage = () => {
  return (
    <Main>
      <div className="space-y-8">
        <Image
          className="rounded-full size-32 grayscale hover:grayscale-0 transition-[filter]"
          src={profilePic}
          alt="Picture of Misha Moroshko"
          placeholder="blur"
        />
        <About />
      </div>
    </Main>
  );
};

export default HomePage;
