type Props = {
  stars: number;
};

const RepoStars = ({ stars }: Props) => {
  return (
    <span className="text-xs flex items-center gap-1 py-1 px-2 rounded-full bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="#eac54f"
        aria-hidden="true"
      >
        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
      </svg>
      {stars}
      <span className="sr-only">stars</span>
    </span>
  );
};

export { RepoStars };
