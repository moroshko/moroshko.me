import type { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-lg py-6 text-gray-800 px-6 xs:px-12 min-h-[calc(100dvh-160px)] bg-white xs:border-x xs:border-gray-200">
      {children}
    </main>
  );
};

export { Main };
