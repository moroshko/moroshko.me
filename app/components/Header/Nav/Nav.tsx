import { NavItem } from "./NavItem";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { CodeIcon } from "./icons/CodeIcon";
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
          <CodeIcon />
        </NavItem>
        {/* <NavItem ariaLabel="Contact" href="/contact">
          <MailIcon />
        </NavItem> */}
      </ul>
    </nav>
  );
};

export { Nav };
