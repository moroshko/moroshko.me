import { SocialLink } from "./SocialLink/SocialLink";
import { BrandGithubIcon } from "./icons/BrandGithubIcon";
import { BrandXIcon } from "./icons/BrandXIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { StackOverflowIcon } from "./icons/StackOverflowIcon";

const Footer = () => {
  return (
    <footer className="flex text-gray-500 items-center justify-between mx-auto max-w-lg py-6 px-6 xs:px-12 bg-white xs:border-x xs:border-gray-200">
      <p className="text-sm">
        {`© ${new Date().getFullYear()} Misha Moroshko`}
      </p>
      <ul className="flex">
        <SocialLink
          href="https://twitter.com/moroshko"
          ariaLabel="Twitter account of Misha Moroshko"
        >
          <BrandXIcon />
        </SocialLink>
        <SocialLink
          href="https://au.linkedin.com/in/moroshko"
          ariaLabel="LinkedIn account of Misha Moroshko"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          href="https://github.com/moroshko"
          ariaLabel="GitHub account of Misha Moroshko"
        >
          <BrandGithubIcon />
        </SocialLink>
        <SocialLink
          href="https://stackoverflow.com/users/247243/misha-moroshko"
          ariaLabel="Stack Overflow account of Misha Moroshko"
        >
          <StackOverflowIcon />
        </SocialLink>
      </ul>
    </footer>
  );
};

export { Footer };
