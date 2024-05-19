import Image from "next/image";
import profilePic from "../../public/images/misha.jpeg";

const OpenGraphPage = () => {
  return (
    <main>
      <div className="mx-auto relative scale-50 flex items-center justify-center bg-white w-[1200px] h-[630px]">
        <Image
          className="rounded-full size-80 grayscale"
          src={profilePic}
          alt=""
        />
        <div className="ml-28 flex flex-col">
          <p className="text-6xl font-semibold">Misha Moroshko</p>
          <p className="text-4xl mt-10">Front End engineer</p>
          <p className="text-3xl mt-10">Melbourne, Australia</p>
        </div>
        <p className="text-2xl text-gray-500 text-center absolute bottom-10">
          Making the web better, one component at a time.
        </p>
      </div>
    </main>
  );
};

export default OpenGraphPage;
