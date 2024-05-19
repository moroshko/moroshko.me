import { CodeItem } from "./CodeItem";

const Code = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-gray-800">Code</h2>
      <CodeItem repoName="react-scanner">
        Extract React components and props usage from code
      </CodeItem>
      <CodeItem repoName="rxviz">
        Animated playground for Rx Observables
      </CodeItem>
      <CodeItem repoName="react-autosuggest">
        WAI-ARIA compliant React autosuggest component
      </CodeItem>
      <CodeItem repoName="accessible-colors">
        Automatically find the closest accessible color combination
      </CodeItem>
    </div>
  );
};

export { Code };
