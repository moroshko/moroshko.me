import type { Metadata } from "next";
import { Main } from "../components/Main/Main";
import { OpenSource } from "./components/OpenSource/OpenSource";

export const revalidate = 86400; // sec (revalidate at most every day)

export const metadata: Metadata = {
  title: "Open Source – Misha Moroshko",
  description: "Open source projects of Misha Moroshko",
};

const OpenSourcePage = () => {
  return (
    <Main>
      <OpenSource />
    </Main>
  );
};

export default OpenSourcePage;
