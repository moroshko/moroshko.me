import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";

type Props = {
  href: string;
  direction: "left" | "right";
  children: ReactNode;
};

const PageLink = ({ href, direction, children }: Props) => {
  return (
    <Link
      className="group inline-flex gap-1 items-center py-2 px-4 rounded-lg ring-1 ring-gray-200 hover:bg-gray-100 transition-colors"
      href={href}
    >
      {direction === "left" ? (
        <>
          <span className="group-hover:-translate-x-0.5 transition-transform">
            <LeftArrowIcon />
          </span>
          {children}
        </>
      ) : (
        <>
          {children}
          <span className="group-hover:translate-x-0.5 transition-transform">
            <ArrowRightIcon />
          </span>
        </>
      )}
    </Link>
  );
};

export { PageLink };
