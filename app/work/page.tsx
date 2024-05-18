import type { Metadata } from "next";
import { Main } from "../components/Main/Main";
import { Work } from "./components/Work/Work";

export const metadata: Metadata = {
  title: "Work – Misha Moroshko",
  description: "Career experience of Misha Moroshko",
};

const WorkPage = () => {
  return (
    <Main>
      <Work />
    </Main>
  );
};

export default WorkPage;
