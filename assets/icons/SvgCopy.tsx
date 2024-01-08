import { FC } from "react";

const SvgCopy: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_37_10971)">
      <path
        d="M10.5 4.5H6C5.44772 4.5 5 4.94772 5 5.5V10C5 10.5523 5.44772 11 6 11H10.5C11.0523 11 11.5 10.5523 11.5 10V5.5C11.5 4.94772 11.0523 4.5 10.5 4.5Z"
        stroke="#2C80FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 7.5H2.5C2.23478 7.5 1.98043 7.39464 1.79289 7.20711C1.60536 7.01957 1.5 6.76522 1.5 6.5V2C1.5 1.73478 1.60536 1.48043 1.79289 1.29289C1.98043 1.10536 2.23478 1 2.5 1H7C7.26522 1 7.51957 1.10536 7.70711 1.29289C7.89464 1.48043 8 1.73478 8 2V2.5"
        stroke="#2C80FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_37_10971">
        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCopy;
