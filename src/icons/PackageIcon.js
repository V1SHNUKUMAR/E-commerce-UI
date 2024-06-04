import React from "react";

const PackageIcon = ({ color = "#707494", size = 0, strokeWidth = "0.5" }) => {
  return (
    <svg
      width={size + 24}
      height={size + 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_643)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5559 2.34499C11.5556 2.34514 11.5553 2.34529 11.555 2.34544L3.55725 6.34433L3.55503 6.34544C3.38843 6.42822 3.24822 6.55585 3.15017 6.71396C3.05216 6.87201 3.00017 7.05427 3.00003 7.24025C3.00003 7.24018 3.00003 7.24031 3.00003 7.24025V16.7669C2.99874 16.9532 3.04952 17.1362 3.1467 17.2953C3.24373 17.454 3.38311 17.5826 3.54919 17.6665C3.54892 17.6663 3.54946 17.6666 3.54919 17.6665L11.5472 21.6655C11.6862 21.735 11.8397 21.7713 11.995 21.7713C12.1504 21.7713 12.3036 21.7351 12.4425 21.6656L20.4428 17.6655L20.445 17.6644C20.6116 17.5816 20.7518 17.454 20.8499 17.2959C20.9479 17.1377 20.9999 16.9554 21 16.7694V7.24044C20.9999 7.05439 20.9479 6.87207 20.8499 6.71396C20.7518 6.55585 20.6116 6.42823 20.445 6.34544L20.4428 6.34433L12.445 2.34544C12.4447 2.34529 12.4444 2.34514 12.4441 2.34499C12.3061 2.27657 12.1541 2.24097 12 2.24097C11.846 2.24097 11.694 2.27657 11.5559 2.34499ZM12.89 1.44991L13.335 0.554375C12.9202 0.348238 12.4633 0.240967 12 0.240967C11.5368 0.240967 11.0799 0.348238 10.665 0.554375L10.6628 0.555479L2.66503 4.55437C2.66462 4.55458 2.66421 4.55478 2.6638 4.55499C2.16452 4.80337 1.74435 5.186 1.45045 5.65994C1.15632 6.13427 1.00033 6.68125 1.00003 7.23937L1.00003 16.7568C0.996863 17.3145 1.14926 17.8622 1.44014 18.3382C1.73169 18.8153 2.15075 19.2014 2.65006 19.4529L2.65282 19.4543L10.6525 23.4542C11.0693 23.6628 11.529 23.7713 11.995 23.7713C12.461 23.7713 12.9205 23.6628 13.3372 23.4543C13.3372 23.4544 13.3373 23.4543 13.3372 23.4543L21.335 19.4554C21.3354 19.4553 21.3357 19.4551 21.336 19.4549C21.8354 19.2066 22.2557 18.8239 22.5496 18.3499C22.8438 17.8755 22.9997 17.3286 23 16.7704V7.23991C22.9997 6.68178 22.8438 6.13427 22.5496 5.65994C22.2557 5.18602 21.8356 4.8034 21.3363 4.55501C21.3359 4.5548 21.3355 4.55459 21.335 4.55437L13.3372 0.555479L12.89 1.44991Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.42561 5.71269C1.6726 5.21871 2.27327 5.01849 2.76725 5.26548L12 9.88187L21.2328 5.26548C21.7268 5.01849 22.3275 5.21871 22.5745 5.71269C22.8215 6.20667 22.6212 6.80734 22.1272 7.05433L12.4472 11.8943C12.1657 12.0351 11.8343 12.0351 11.5528 11.8943L1.87282 7.05433C1.37884 6.80734 1.17862 6.20667 1.42561 5.71269Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 9.99991C12.5523 9.99991 13 10.4476 13 10.9999V22.7599C13 23.3122 12.5523 23.7599 12 23.7599C11.4477 23.7599 11 23.3122 11 22.7599V10.9999C11 10.4476 11.4477 9.99991 12 9.99991Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.10561 3.05269C6.3526 2.55871 6.95327 2.35849 7.44725 2.60548L17.4472 7.60548C17.9412 7.85247 18.1414 8.45314 17.8945 8.94712C17.6475 9.4411 17.0468 9.64132 16.5528 9.39433L6.55282 4.39433C6.05884 4.14734 5.85862 3.54667 6.10561 3.05269Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_643">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PackageIcon;