import type { ReactNode } from "react";
import { RepoStars } from "./RepoStars";
import { getRepoData, getRepoUrl } from "./utils";

type Props = {
  repoName: string;
  children: ReactNode;
};

const OpenSourceItem = async ({ repoName, children }: Props) => {
  const { stars } = await getRepoData(repoName);

  return (
    <div className="space-y-0.5 border-b border-gray-300 border-dashed pb-5">
      <h3 className="flex justify-between items-center">
        <a
          className="font-semibold hover:underline text-lg"
          href={getRepoUrl(repoName)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoName}
        </a>
        {stars !== null && <RepoStars stars={stars} />}
      </h3>
      <p className="pr-20">{children}</p>
    </div>
  );
};

export { OpenSourceItem };
