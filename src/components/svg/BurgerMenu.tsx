import * as React from "react";
import { SVGProps } from "react";

const BurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_653_1180)">
      <path
        d="M3.88501 18H21.885V16H3.88501V18ZM3.88501 13H21.885V11H3.88501V13ZM3.88501 6V8H21.885V6H3.88501Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_653_1180">
        <rect
          width="24"
          height="24"
          fill="currentColor"
          transform="translate(0.88501)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default BurgerMenu;
