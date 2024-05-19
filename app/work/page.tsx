import type { Metadata } from "next";
import { Main } from "../components/Main/Main";
import { PageLink } from "../components/PageLink/PageLink";
import { Work } from "./components/Work/Work";

export const metadata: Metadata = {
  title: "Work – Misha Moroshko",
  description: "Career experience of Misha Moroshko",
};

const WorkPage = () => {
  return (
    <Main>
      <div className="space-y-8">
        <Work />
        <div className="flex justify-between">
          <PageLink href="/" direction="left">
            Home
          </PageLink>
          <PageLink href="/code" direction="right">
            Code
          </PageLink>
        </div>
      </div>
    </Main>
  );
};

export default WorkPage;
