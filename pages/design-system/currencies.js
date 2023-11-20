import React, { useState, useContext } from "react";

import Footer from "@/components/Footer/Footer";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import AchievementFrame from "@/components/Achievements/AchievementFrame";
import AchievementIcon from "@/components/Achievements/AchievementIcon";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalAchievementReceived from "../prototype/modal-achievementreceived";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);

  const currencies = [
    {
      title: "Coins",
      name: "coins",
      items: [
        {
          amount: "25 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_25.webp",
        },
        {
          amount: "30 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_30.webp",
        },
        {
          amount: "40 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_40.webp",
        },
        {
          amount: "50 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_50.webp",
        },
        {
          amount: "60 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_60.webp",
        },
        {
          amount: "125 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_125.webp",
        },
        {
          amount: "250 coins",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Coin_250.webp",
        },
      ],
    },
    {
      title: "Tokens",
      name: "tokens",
      items: [
        {
          amount: "25 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_25.webp",
        },
        {
          amount: "30 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_30.webp",
        },
        {
          amount: "40 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_40.webp",
        },
        {
          amount: "50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_50.webp",
        },
        {
          amount: "60 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_60.webp",
        },
        {
          amount: "120 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_120.webp",
        },
        {
          amount: "250 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Token_250.webp",
        },
      ],
    },
    {
      title: "Bundles",
      name: "bundles",
      items: [
        {
          amount: "20 coins + 20 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473309/Stryda/currencies/Currencies_Bundle_20_20.webp",
        },
        {
          amount: "25 coins + 25 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Bundle_25_25.webp",
        },
        {
          amount: "125 coins + 20 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Bundle_125_20.webp",
        },
        {
          amount: "150 coins + 50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473309/Stryda/currencies/Currencies_Bundle_150_50.webp",
        },
        {
          amount: "175 coins + 50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473309/Stryda/currencies/Currencies_Bundle_175_50.webp",
        },
        {
          amount: "200 coins + 50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Bundle_200_50.webp",
        },
        {
          amount: "225 coins + 50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Bundle_225_50.webp",
        },
        {
          amount: "250 coins + 50 tokens",
          url: "https://res.cloudinary.com/gloot/image/upload/v1700473322/Stryda/currencies/Currencies_Bundle_250_50.webp",
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="mb-8">Currencies</h1>

      {/* Structure */}
      {currencies.map((currency, currencyItem) => (
        <div key={currencyItem} className="mb-12">
          <Anchor title={currency.title} />

          <div className="flex flex-wrap gap-4">
            {currency.items.map((item, itemIndex) => (
              <div key={itemIndex} className="surface rounded w-52 h-52 pb-2 aspect-square flex flex-col justify-between gap-2">
                <img
                  src={item.url}
                  alt={`${currency.name} ${item.amount}`}
                  className="w-4/5 mx-auto -mt-2"
                />
                <div className="text-xs text-ui-300 text-center">
                  <span className="tooltip tooltip-top" data-tooltip="Copy image URL">
                    <a
                      className="link"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "medium",
                          text: "Currency image URL copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText(item.url);
                      }}
                    >
                      {item.amount}
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
