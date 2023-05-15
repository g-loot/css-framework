import React from "react";

export default function LeaderboardWings(props) {
  const itemIndex = props.id || 0;
  const value = props.value || itemIndex + 1;

  return (
    <div
      className={`relative text-xl text-center px-4  ${
        itemIndex === 0 ? "text-gold-500" : ""
      }${itemIndex === 1 ? "text-silver-500" : ""} ${
        itemIndex === 2 ? "text-bronze-500" : ""
      } ${itemIndex > 2 ? "text-ui-300" : ""}`}
    >
      <span>{value}</span>
      <div className="absolute inset-0 flex items-center justify-between">
        <svg
          className={`${itemIndex === 0 ? "fill-gold-500" : ""}${
            itemIndex === 1 ? "fill-silver-500" : ""
          } ${itemIndex === 2 ? "fill-bronze-500" : ""} ${
            itemIndex > 2 ? "hidden" : ""
          }`}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
        </svg>
        <svg
          className={`-scale-x-100 ${itemIndex === 0 ? "fill-gold-500" : ""}${
            itemIndex === 1 ? "fill-silver-500" : ""
          } ${itemIndex === 2 ? "fill-bronze-500" : ""} ${
            itemIndex > 2 ? "hidden" : ""
          }`}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
        </svg>
      </div>
    </div>
  );
}
