import type { ReactNode } from "react";

type Props = {
  company: string;
  companyUrl?: string;
  years: string;
  children: ReactNode;
};

const WorkItem = ({ company, companyUrl, years, children }: Props) => {
  return (
    <div className="space-y-0.5 border-b border-gray-300 border-dashed pb-5">
      <h3 className="flex justify-between items-baseline">
        {companyUrl === undefined ? (
          <span
            className="font-semibold hover:underline text-lg cursor-help"
            title="I bet you know it 😊"
          >
            {company}
          </span>
        ) : (
          <a
            className="font-semibold hover:underline text-lg"
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        )}
        <span className="text-xs text-gray-500">{years}</span>
      </h3>
      <p className="text-pretty">{children}</p>
    </div>
  );
};

export { WorkItem };
