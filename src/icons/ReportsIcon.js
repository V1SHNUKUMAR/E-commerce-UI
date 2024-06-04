import React from "react";

const ReportsIcon = ({ color = "#707494", size = 0, strokeWidth = "0.5" }) => {
  return (
    <svg
      width={size + 20}
      height={size + 24}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.171021 4.87179V20.1517C0.171021 20.9115 0.472787 21.6403 1.01022 22.1775C1.5475 22.7148 2.27623 23.0167 3.03601 23.0167H16.406C17.1657 23.0167 17.8945 22.7148 18.4318 22.1775C18.9692 21.6403 19.271 20.9115 19.271 20.1517V4.87179C19.271 4.11205 18.9692 3.38327 18.4318 2.846C17.8945 2.3086 17.1657 2.0068 16.406 2.0068H15.4509V1.05188C15.4509 0.710647 15.2689 0.395409 14.9734 0.224703C14.678 0.054168 14.3139 0.054168 14.0185 0.224703C13.7231 0.395405 13.5411 0.710643 13.5411 1.05188V2.0068H10.6759V1.05188C10.6759 0.710647 10.4939 0.395409 10.1985 0.224703C9.90305 0.054168 9.53899 0.054168 9.24358 0.224703C8.94814 0.395405 8.76612 0.710643 8.76612 1.05188V2.0068H5.901V1.05188C5.901 0.710647 5.71898 0.395409 5.42355 0.224703C5.12811 0.054168 4.76404 0.054168 4.46863 0.224703C4.17319 0.395405 3.99118 0.710643 3.99118 1.05188V2.0068H3.0361C2.27636 2.0068 1.54758 2.30856 1.01031 2.846C0.472911 3.38327 0.171106 4.11201 0.171106 4.87179H0.171021ZM4.946 5.82686C5.19931 5.82686 5.44213 5.72611 5.62132 5.54708C5.80035 5.36805 5.90094 5.12507 5.90094 4.87176V3.91685H8.76606V4.87176C8.76606 5.213 8.94809 5.52824 9.24352 5.69877C9.53896 5.86947 9.90302 5.86947 10.1984 5.69877C10.4939 5.52824 10.6759 5.21296 10.6759 4.87176V3.91685H13.541V4.87176C13.541 5.213 13.723 5.52824 14.0185 5.69877C14.3139 5.86947 14.678 5.86947 14.9734 5.69877C15.2688 5.52824 15.4508 5.21296 15.4508 4.87176V3.91685H16.4059C16.6592 3.91685 16.902 4.01744 17.0812 4.19647C17.2603 4.37566 17.3608 4.61847 17.3608 4.87179V20.1517C17.3608 20.4049 17.2603 20.6479 17.0812 20.8269C16.902 21.0061 16.6592 21.1067 16.4059 21.1067H3.03595C2.78265 21.1067 2.53982 21.0061 2.36063 20.8269C2.1816 20.6479 2.08101 20.4049 2.08101 20.1517V4.87179C2.08101 4.61848 2.1816 4.37566 2.36063 4.19647C2.53983 4.01744 2.78264 3.91685 3.03595 3.91685H3.99086V4.87176H3.99103C3.99103 5.12507 4.09162 5.36806 4.27065 5.54708C4.44984 5.72611 4.69269 5.82686 4.946 5.82686Z"
        fill={color}
      />
      <path
        d="M14.496 12.5111H4.946C4.60476 12.5111 4.28953 12.6931 4.11899 12.9887C3.94846 13.2842 3.94846 13.6482 4.11899 13.9436C4.28953 14.2391 4.6048 14.4211 4.946 14.4211H14.496C14.8372 14.4211 15.1524 14.2391 15.323 13.9436C15.4935 13.6482 15.4935 13.2841 15.323 12.9887C15.1524 12.6931 14.8372 12.5111 14.496 12.5111Z"
        fill={color}
      />
      <path
        d="M14.496 16.332H4.946C4.60476 16.332 4.28953 16.514 4.11899 16.8094C3.94846 17.1049 3.94846 17.4689 4.11899 17.7645C4.28953 18.0599 4.6048 18.242 4.946 18.242H14.496C14.8372 18.242 15.1524 18.0599 15.323 17.7645C15.4935 17.4689 15.4935 17.1048 15.323 16.8094C15.1524 16.514 14.8372 16.332 14.496 16.332Z"
        fill={color}
      />
      <path
        d="M4.946 10.602H14.496C14.8372 10.602 15.1524 10.42 15.323 10.1244C15.4935 9.82894 15.4935 9.46488 15.323 9.16947C15.1524 8.87406 14.8372 8.69202 14.496 8.69202H4.946C4.60476 8.69202 4.28953 8.87404 4.11899 9.16947C3.94846 9.4649 3.94846 9.82897 4.11899 10.1244C4.28953 10.42 4.6048 10.602 4.946 10.602Z"
        fill={color}
      />
    </svg>
  );
};

export default ReportsIcon;
