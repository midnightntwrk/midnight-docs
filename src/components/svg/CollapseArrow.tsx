import * as React from "react";
import { SVGProps } from "react";

const CollapseArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={18}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_481_3209)">
      <path
        d="M14.6666 8.33651H6.04623L10.0058 4.37692L8.99998 3.37817L3.33331 9.04484L8.99998 14.7115L9.99873 13.7128L6.04623 9.75317H14.6666V8.33651Z"
        fill="#757575"
      />
    </g>
    <line
      x1="20.3761"
      y1="3.44702"
      x2="20.3761"
      y2="14.6983"
      stroke="#757575"
      strokeWidth="1.75"
    />
    <defs>
      <clipPath id="clip0_481_3209">
        <rect width="17" height="17" transform="translate(0.5 0.5448)" />
      </clipPath>
    </defs>
  </svg>
);

export default CollapseArrow;
