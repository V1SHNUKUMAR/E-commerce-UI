import React from "react";

const CartIcon = ({ color = "#707494", size = 0, strokeWidth = "0.5" }) => {
  return (
    <svg
      width={size + 26}
      height={size + 25}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5435 17.6693C18.672 17.6693 17.8364 18.0154 17.2202 18.6315C16.6039 19.2478 16.2578 20.0835 16.2578 20.9548C16.2578 21.8262 16.6039 22.6619 17.2202 23.2782C17.8364 23.8943 18.672 24.2404 19.5435 24.2404C20.4148 24.2404 21.2506 23.8943 21.8668 23.2782C22.4829 22.6619 22.829 21.8262 22.829 20.9548C22.8284 20.0837 22.4819 19.2485 21.866 18.6325C21.2499 18.0164 20.4146 17.6701 19.5435 17.6693L19.5435 17.6693ZM19.5435 22.2183C19.2075 22.2183 18.8851 22.0847 18.6477 21.8471C18.41 21.6093 18.2768 21.2869 18.277 20.9509C18.2772 20.6149 18.411 20.2927 18.6491 20.0555C18.8869 19.8181 19.2093 19.685 19.5453 19.6857C19.8813 19.6861 20.2034 19.8201 20.4405 20.0581C20.6777 20.2961 20.8105 20.6187 20.8097 20.9547C20.8089 21.2901 20.6753 21.6115 20.4379 21.8483C20.2004 22.0854 19.8787 22.2183 19.5435 22.2183Z"
        fill={color}
      />
      <path
        d="M24.6204 4.63083H7.76854L7.35887 2.92313C7.21701 2.32328 6.87655 1.78905 6.39262 1.40736C5.90869 1.02566 5.30985 0.818582 4.69357 0.820231H1.54356C1.18278 0.820231 0.849547 1.0128 0.669257 1.32508C0.488767 1.63737 0.488767 2.02229 0.669257 2.33481C0.849547 2.64709 1.18276 2.83946 1.54356 2.83946H4.71675C5.05077 2.83865 5.34112 3.06824 5.41756 3.39341L7.91869 13.9254C8.12031 14.7775 8.60425 15.5367 9.29177 16.0792C9.97955 16.6217 10.8303 16.9158 11.7062 16.9138H19.9562C20.8377 16.918 21.6945 16.6219 22.3853 16.0739C23.0758 15.5258 23.5589 14.7588 23.7552 13.8994L25.6186 5.86878V5.86858C25.6889 5.56615 25.6158 5.24844 25.421 5.0068C25.226 4.76514 24.9309 4.6267 24.6206 4.63113L24.6204 4.63083ZM21.7819 13.4434C21.6859 13.8549 21.4529 14.2219 21.1213 14.4838C20.7895 14.7458 20.3786 14.8875 19.9561 14.8857H11.7061C11.2839 14.8863 10.8741 14.7442 10.543 14.4822C10.212 14.2205 9.97925 13.8543 9.88287 13.4434L8.25321 6.65006H23.3599L21.7819 13.4434Z"
        fill={color}
      />
      <path
        d="M11.3511 17.6693C10.4803 17.6716 9.64602 18.0195 9.03154 18.6368C8.41701 19.2539 8.07276 20.0897 8.07436 20.9606C8.07577 21.8314 8.42307 22.6661 9.03958 23.2812C9.65632 23.8962 10.4919 24.2412 11.3628 24.2404C12.2337 24.2396 13.0685 23.8931 13.6842 23.2772C14.2998 22.6611 14.6454 21.8258 14.6454 20.9548C14.6446 20.0823 14.2971 19.2456 13.6792 18.6293C13.0613 18.0132 12.2238 17.6677 11.3511 17.6693V17.6693ZM11.3511 22.2184C11.0151 22.2184 10.693 22.0848 10.4555 21.8472C10.2179 21.6093 10.0847 21.287 10.0849 20.951C10.0851 20.615 10.2189 20.2928 10.4567 20.0555C10.6948 19.8181 11.0171 19.6851 11.3531 19.6857C11.6892 19.6861 12.0111 19.8201 12.2483 20.0582C12.4856 20.2962 12.6184 20.6188 12.6176 20.9548C12.6168 21.2902 12.483 21.6115 12.2457 21.8484C12.0083 22.0854 11.6866 22.2184 11.3511 22.2184Z"
        fill={color}
      />
    </svg>
  );
};

export default CartIcon;
