import type { Metadata } from "next";
import { Main } from "../components/Main/Main";
import { PageLink } from "../components/PageLink/PageLink";
import { Code } from "./components/Code/Code";

export const revalidate = 86400; // sec (revalidate at most every day)

export const metadata: Metadata = {
  title: "Code – Misha Moroshko",
  description: "Open source projects of Misha Moroshko",
};

const CodePage = () => {
  return (
    <Main>
      <div className="space-y-8">
        <Code />
        <PageLink href="/" direction="left">
          Work
        </PageLink>
      </div>
    </Main>
  );
};

export default CodePage;
