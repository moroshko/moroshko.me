import { WorkItem } from "./WorkItem";

const Work = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800">Work</h2>
      <WorkItem
        company="Surreal"
        companyUrl="https://surreal.live"
        years="Sep 2021 – Present"
      >
        Leading Front End engineering of the Surreal platform and the Surreal
        Design System.
      </WorkItem>
      <WorkItem
        company="Latitude"
        companyUrl="https://latitudefinancial.com.au"
        years="Aug 2019 – Sep 2021"
      >
        Managed a team of 4 engineers to rebuild the new Latitude Service
        Centre. Created the Basis Design System and helped teams across the
        company to adopt it.
      </WorkItem>
      <WorkItem company="Facebook" years="Nov 2016 – May 2019">
        Co-founded a new data annotation platform on the Computer Vision team.
        Designed and built from scratch multiple annotation tools, and worked
        with 20+ teams across Facebook to improve the platform.
      </WorkItem>
      <WorkItem
        company="SEEK"
        companyUrl="https://seek.com.au"
        years="Feb 2014 – Sep 2016"
      >
        Worked on the rebuild of the core job search experience and the Talent
        Search platform.
      </WorkItem>
    </div>
  );
};

export { Work };
