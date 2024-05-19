import type { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-xl py-6 text-gray-800 px-6 xs:px-12 min-h-[calc(100dvh-168px)] bg-white">
      {children}
    </main>
  );
};

export { Main };
