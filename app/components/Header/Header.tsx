import { Nav } from "./Nav/Nav";

const Header = () => {
  return (
    <header className="z-top flex items-center justify-between mx-auto max-w-lg py-6 bg-white/80 sticky top-0 bg-white px-6 xs:px-12 xs:border-x xs:border-gray-200 backdrop-saturate-150 backdrop-blur-sm">
      <h1 className="font-medium text-xl">Misha Moroshko</h1>
      <Nav />
    </header>
  );
};

export { Header };
