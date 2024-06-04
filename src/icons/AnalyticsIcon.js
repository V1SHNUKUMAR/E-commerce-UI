import React from "react";

const AnalyticsIcon = ({
  color = "#707494",
  size = 0,
  strokeWidth = "0.5",
}) => {
  return (
    <svg
      width={size + 25}
      height={size + 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.96157 2.36241H2.96147V13.3623C2.96147 14.158 3.27746 14.9212 3.84022 15.4837C4.4028 16.0463 5.16588 16.3625 5.96145 16.3625H10.5462L6.25395 20.655C6.00109 20.9076 5.90239 21.2761 5.99499 21.6214C6.08741 21.9667 6.35718 22.2362 6.70248 22.3289C7.04776 22.4213 7.41605 22.3226 7.6689 22.0699L11.9614 17.7774V23.3622C11.9614 23.7195 12.152 24.0496 12.4613 24.2284C12.7707 24.4069 13.1519 24.4069 13.4612 24.2284C13.7706 24.0496 13.9612 23.7195 13.9612 23.3622V17.7774L18.2536 22.0699C18.5065 22.3226 18.8748 22.4213 19.2201 22.3289C19.5653 22.2363 19.8351 21.9667 19.9276 21.6214C20.0202 21.2761 19.9215 20.9076 19.6686 20.655L15.3763 16.3625H19.9611C20.7566 16.3625 21.5197 16.0463 22.0823 15.4837C22.645 14.9212 22.9611 14.1581 22.9611 13.3623V2.36241H23.961C24.3183 2.36241 24.6484 2.17181 24.8271 1.86246C25.0057 1.5531 25.0057 1.17189 24.8271 0.862378C24.6484 0.553019 24.3183 0.362427 23.961 0.362427H1.96114C1.60383 0.362427 1.27374 0.553028 1.09499 0.862378C0.916417 1.17191 0.916417 1.55313 1.09499 1.86246C1.27373 2.17182 1.60382 2.36241 1.96114 2.36241H1.96157ZM20.9614 2.36241L20.9613 13.3623C20.9613 13.6276 20.8559 13.882 20.6685 14.0695C20.4808 14.2571 20.2266 14.3624 19.9613 14.3624H5.96143C5.69619 14.3624 5.44192 14.2571 5.25429 14.0695C5.06683 13.882 4.9615 13.6276 4.9615 13.3623V2.36241H20.9614Z"
        fill={color}
      />
      <path
        d="M8.66908 11.0684L10.9616 8.77595L13.254 11.0684C13.4417 11.2562 13.6961 11.3618 13.9615 11.3618C14.227 11.3618 14.4815 11.2562 14.669 11.0684L18.6691 7.06838V7.06855C18.922 6.81569 19.0207 6.4474 18.9281 6.10213C18.8356 5.75685 18.5659 5.48709 18.2206 5.39464C17.8753 5.30204 17.5068 5.40074 17.2541 5.6536L13.9616 8.94598L11.6691 6.6535C11.4816 6.46569 11.227 6.36019 10.9616 6.36019C10.6962 6.36019 10.4417 6.46569 10.2541 6.6535L7.25417 9.65343C7.00131 9.90629 6.90261 10.2746 6.99521 10.6199C7.08763 10.9651 7.35741 11.2349 7.7027 11.3273C8.04798 11.4199 8.41645 11.3212 8.66912 11.0684L8.66908 11.0684Z"
        fill={color}
      />
    </svg>
  );
};

export default AnalyticsIcon;