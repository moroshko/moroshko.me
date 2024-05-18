import { OpenSourceItem } from "./OpenSourceItem";

const OpenSource = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800">Open Source</h2>
      <OpenSourceItem repoName="react-scanner">
        Extract React components and props usage from code
      </OpenSourceItem>
      <OpenSourceItem repoName="rxviz">
        Animated playground for Rx Observables
      </OpenSourceItem>
      <OpenSourceItem repoName="react-autosuggest">
        WAI-ARIA compliant React autosuggest component
      </OpenSourceItem>
      <OpenSourceItem repoName="accessible-colors">
        Automatically find the closest accessible color combination
      </OpenSourceItem>
    </div>
  );
};

export { OpenSource };
