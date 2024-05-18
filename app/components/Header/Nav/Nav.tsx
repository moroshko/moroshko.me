import { NavItem } from "./NavItem";
import { BrandGithubIcon } from "./icons/BrandGithubIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { HomeIcon } from "./icons/HomeIcon";

const Nav = () => {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex text-gray-500 gap-1">
        <NavItem ariaLabel="Home" href="/">
          <HomeIcon />
        </NavItem>
        <NavItem ariaLabel="Work" href="/work">
          <BriefcaseIcon />
        </NavItem>
        <NavItem ariaLabel="Open Source" href="/open-source">
          <BrandGithubIcon />
        </NavItem>
        {/* <NavItem ariaLabel="Contact" href="/contact">
          <MailIcon />
        </NavItem> */}
      </ul>
    </nav>
  );
};

export { Nav };
