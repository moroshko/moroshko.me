import { ImageResponse } from "next/og";

// Image metadata
export const contentType = "image/png";
export const alt = "Misha Moroshko";
export const size = {
  width: 1200,
  height: 630,
};

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL === undefined
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const getImageSrc = async () => {
  const arrayBuffer = await fetch(
    new URL("../images/misha.jpeg", baseUrl),
  ).then((res) => res.arrayBuffer());
  const blob = new Blob([arrayBuffer], { type: "image/jpeg" });
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(arrayBuffer)),
  );

  return `data:image/jpeg;base64,${base64String}`;
};

export default async function Image() {
  const geistRegular = await fetch(
    new URL("../fonts/Geist-Regular.ttf", baseUrl),
  ).then((res) => res.arrayBuffer());
  const geistSemiBold = await fetch(
    new URL("../fonts/Geist-SemiBold.ttf", baseUrl),
  ).then((res) => res.arrayBuffer());
  const imageSrc = await getImageSrc();

  return new ImageResponse(
    <div
      tw="flex items-center justify-center w-full h-full bg-white"
      style={{
        fontFamily: '"Geist Regular"',
      }}
    >
      <img
        tw="rounded-full"
        style={{
          filter: "grayscale(1)",
        }}
        width="320"
        height="320"
        src={imageSrc}
        alt="Misha Moroshko"
      />
      <div tw="ml-28 flex flex-col">
        <p
          style={{
            fontFamily: '"Geist SemiBold"',
            fontSize: "60px",
          }}
        >
          Misha Moroshko
        </p>
        <p
          style={{
            fontSize: "44px",
          }}
        >
          Front End engineer
        </p>
        <p
          style={{
            fontSize: "36px",
          }}
        >
          Melbourne, Australia
        </p>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Geist Regular",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist SemiBold",
          data: geistSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
