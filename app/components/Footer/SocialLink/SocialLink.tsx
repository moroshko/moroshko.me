import type { ReactNode } from "react";

type Props = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

const SocialLink = ({ href, ariaLabel, children }: Props) => {
  return (
    <li className="flex">
      <a
        className="hover:text-gray-800 p-1.5 inline-block rounded-lg hover:bg-gray-100 transition-colors"
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
};

export { SocialLink };
