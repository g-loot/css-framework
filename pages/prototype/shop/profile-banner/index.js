import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalProfileBannerPurchaseConfirmation from "./modal-profilebannerpurchaseconfirmation";
import ModalProfileBannerPurchaseCompleted from "./modal-profilebannerpurchasecompleted";

export default function Home() {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedShopsection, setSelectedShopsection] = useState(2);
  const hasAds = query.ads === "true" ? true : false;
  const modalItemPurchaseConfirmation =
    query.modalpurchaseconfirmation === "true" ? true : false;
  const modalItemPurchaseCompleted =
    query.modalpurchasecompleted === "true" ? true : false;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  useEffect(() => {
    if (modalItemPurchaseConfirmation) {
      openModalItemPurchaseConfirmation();
    }
  }, [modalItemPurchaseConfirmation]);
  useEffect(() => {
    if (modalItemPurchaseCompleted) {
      openmodalItemPurchaseCompleted();
    }
  }, [modalItemPurchaseCompleted]);

  function openModalItemPurchaseConfirmation(id) {
    uiContext.openModal(<ModalProfileBannerPurchaseConfirmation id={id} />);
  }
  function openmodalItemPurchaseCompleted(id) {
    uiContext.openModal(<ModalProfileBannerPurchaseCompleted id={id} />);
  }

  useEffect(() => {
    setSelectedShopsection(prototype.getShopsectionByID(2));
  }, []);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <PrototypeStructure title="Shop">
        <Ad width="1005" height="300" />

        <section className="mb-4">
          <div className="header surface sm:rounded-lg">
            <div className="header-breadcrumbs">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href={`/prototype/home`}>
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/prototype/shop`}>
                      <a href="#">
                        <span>Shop</span>
                      </a>
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div>
                      <span>{selectedShopsection.name}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="header-content">
              <div className="header-body">
                <h1>{selectedShopsection.name}</h1>
                <p className="text-ui-300 max-w-[70ch] mt-4">
                  {selectedShopsection.description}
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672216041/Stryda/illustrations/Shop_bg.jpg" />
            </div>
          </div>
        </section>

        <section className="mb-4 sm:rounded overflow-hidden aspect-landscape lg:aspect-banner relative surface">
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1700486364/Stryda/marketing/campaigns/2023%20Black%20Friday/Black_Friday_2023_above.webp"
            alt=""
            className="absolute z-10 w-full h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1700486005/Stryda/marketing/campaigns/2023%20Black%20Friday/Black_Friday_2023_bg.webp"
            alt=""
            className="absolute z-0 w-full h-full object-cover"
          />
        </section>

        <section className="mb-4 lg:mb-8">
          <ul className="grid lg:grid-cols-2 justify-items-center gap-4 mt-3">
            {loading ? (
              <>
                {selectedShopsection.items
                  ?.sort((itemA, itemB) => itemB.price - itemA.price)
                  .map((item, itemIndex) => (
                    <>
                      <li
                        key={item.id}
                        className="w-full surface rounded-2xl is-loading aspect-banner"
                      />
                    </>
                  ))}
              </>
            ) : (
              <>
                {selectedShopsection.items
                  ?.sort((itemA, itemB) => itemB.price - itemA.price)
                  .map((item, itemIndex) => (
                    <>
                      <li
                        key={item.id}
                        className="w-full surface rounded-2xl flex flex-col items-stretch text-center animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": `calc( ${itemIndex} * 0.05s)`,
                        }}
                      >
                        <div className="flex-1 flex flex-col items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="aspect-banner rounded-t object-cover"
                          />
                        </div>
                        <div className="border-t border-ui-700 p-4 flex items-center justify-between leading-none">
                          <div className="text-lg md:text-xl">{item.name}</div>
                          {!item.isOwned ? (
                            <>
                              {item.price && (
                                <>
                                  {90000 >= item.price && (
                                    <button
                                      type="button"
                                      onClick={openModalItemPurchaseConfirmation.bind(
                                        this,
                                        item.id
                                      )}
                                      className="button button-primary button-currency button-coin"
                                    >
                                      <div>
                                        <span>Purchase</span>
                                      </div>
                                      <div>
                                        <span className="icon icon-coin" />
                                        <span>
                                          {numberWithSpaces(item.price)}
                                        </span>
                                      </div>
                                    </button>
                                  )}
                                  {90000 < item.price && (
                                    <div
                                      className="tooltip"
                                      data-tooltip="Not enough funds"
                                    >
                                      <button
                                        type="button"
                                        className="button button-primary button-currency button-coin is-disabled"
                                      >
                                        <div>
                                          <span>Purchase</span>
                                        </div>
                                        <div>
                                          <span className="icon icon-coin" />
                                          <span>
                                            {numberWithSpaces(item.price)}
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <div className="h-9 text-ui-300 uppercase grid place-content-center">
                              <span>Owned</span>
                            </div>
                          )}
                          {!item.price && (
                            <button
                              type="button"
                              className="button button-primary is-disabled w-full"
                            >
                              <span>Out of stock</span>
                            </button>
                          )}
                        </div>
                      </li>
                    </>
                  ))}
              </>
            )}
          </ul>
        </section>
      </PrototypeStructure>
    </>
  );
}
