"use client";

import cx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  ariaLabel: string;
  href: string;
  children: ReactNode;
};

const NavItem = ({ ariaLabel, href, children }: Props) => {
  const segment = useSelectedLayoutSegment();
  const isActive =
    (segment === "(home)" && href === "/") || href === `/${segment}`;

  return (
    <Link
      className={cx(
        "p-2 rounded-lg hover:bg-gray-100 transition-colors",
        isActive && "bg-gray-100 text-gray-800",
      )}
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export { NavItem };
