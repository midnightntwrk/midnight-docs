import * as React from "react";
import { SVGProps } from "react";

const ExpandArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={18}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_481_3328)">
      <path
        d="M6.63163 9.75334L15.252 9.75334L11.2925 13.7129L12.2983 14.7117L17.965 9.045L12.2983 3.37834L11.2996 4.37709L15.252 8.33667L6.63163 8.33667L6.63163 9.75334Z"
        fill="#757575"
      />
    </g>
    <line
      x1="0.922241"
      y1="14.6428"
      x2="0.922242"
      y2="3.39157"
      stroke="#757575"
      strokeWidth="1.75"
    />
    <defs>
      <clipPath id="clip0_481_3328">
        <rect
          width="17"
          height="17"
          fill="white"
          transform="translate(20.7983 17.5449) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ExpandArrow;
