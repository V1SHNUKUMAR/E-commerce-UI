import React from "react";

const TruckIcon = ({ color = "#707494", size = 0, strokeWidth = "0.5" }) => {
  return (
    <svg
      width={size + 24}
      height={size + 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_640)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.05176e-05 2.99994C3.05176e-05 2.44765 0.447746 1.99994 1.00003 1.99994H16C16.5523 1.99994 17 2.44765 17 2.99994V15.9999C17 16.5522 16.5523 16.9999 16 16.9999H1.00003C0.447746 16.9999 3.05176e-05 16.5522 3.05176e-05 15.9999V2.99994ZM2.00003 3.99994V14.9999H15V3.99994H2.00003Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 7.99994C15 7.44765 15.4477 6.99994 16 6.99994H20C20.2652 6.99994 20.5196 7.1053 20.7071 7.29283L23.7071 10.2928C23.8947 10.4804 24 10.7347 24 10.9999V15.9999C24 16.5522 23.5523 16.9999 23 16.9999H16C15.4477 16.9999 15 16.5522 15 15.9999V7.99994ZM17 8.99994V14.9999H22V11.4142L19.5858 8.99994H17Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.50003 16.9999C4.6716 16.9999 4.00003 17.6715 4.00003 18.4999C4.00003 19.3284 4.6716 19.9999 5.50003 19.9999C6.32846 19.9999 7.00003 19.3284 7.00003 18.4999C7.00003 17.6715 6.32846 16.9999 5.50003 16.9999ZM2.00003 18.4999C2.00003 16.5669 3.56703 14.9999 5.50003 14.9999C7.43303 14.9999 9.00003 16.5669 9.00003 18.4999C9.00003 20.4329 7.43303 21.9999 5.50003 21.9999C3.56703 21.9999 2.00003 20.4329 2.00003 18.4999Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5 16.9999C17.6716 16.9999 17 17.6715 17 18.4999C17 19.3284 17.6716 19.9999 18.5 19.9999C19.3285 19.9999 20 19.3284 20 18.4999C20 17.6715 19.3285 16.9999 18.5 16.9999ZM15 18.4999C15 16.5669 16.567 14.9999 18.5 14.9999C20.433 14.9999 22 16.5669 22 18.4999C22 20.4329 20.433 21.9999 18.5 21.9999C16.567 21.9999 15 20.4329 15 18.4999Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_640">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TruckIcon;
