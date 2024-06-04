import React from "react";

const CalendarIcon = ({ color = "#707494", size = 0, strokeWidth = "0.5" }) => {
  return (
    <svg
      width={size + 24}
      height={size + 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.00003 4.99994C4.44775 4.99994 4.00003 5.44765 4.00003 5.99994V19.9999C4.00003 20.5522 4.44775 20.9999 5.00003 20.9999H19C19.5523 20.9999 20 20.5522 20 19.9999V5.99994C20 5.44765 19.5523 4.99994 19 4.99994H5.00003ZM2.00003 5.99994C2.00003 4.34308 3.34318 2.99994 5.00003 2.99994H19C20.6569 2.99994 22 4.34308 22 5.99994V19.9999C22 21.6568 20.6569 22.9999 19 22.9999H5.00003C3.34318 22.9999 2.00003 21.6568 2.00003 19.9999V5.99994Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 0.999939C16.5523 0.999939 17 1.44765 17 1.99994V5.99994C17 6.55222 16.5523 6.99994 16 6.99994C15.4477 6.99994 15 6.55222 15 5.99994V1.99994C15 1.44765 15.4477 0.999939 16 0.999939Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.00003 0.999939C8.55232 0.999939 9.00003 1.44765 9.00003 1.99994V5.99994C9.00003 6.55222 8.55232 6.99994 8.00003 6.99994C7.44775 6.99994 7.00003 6.55222 7.00003 5.99994V1.99994C7.00003 1.44765 7.44775 0.999939 8.00003 0.999939Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.00003 9.99994C2.00003 9.44765 2.44775 8.99994 3.00003 8.99994H21C21.5523 8.99994 22 9.44765 22 9.99994C22 10.5522 21.5523 10.9999 21 10.9999H3.00003C2.44775 10.9999 2.00003 10.5522 2.00003 9.99994Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon;