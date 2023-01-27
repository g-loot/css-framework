import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import { UiContext } from "../../../../contexts/ui";
import ModalAvatarFramePurchaseConfirmation from "./modal-avatarframepurchaseconfirmation";
import ModalAvatarFramePurchaseCompleted from "./modal-avatarframepurchasecompleted";

export default function Home() {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedShopsection, setSelectedShopsection] = useState(1);
  const hasAds = query.ads === "true" ? true : false;
  const modalItemPurchaseConfirmation =
    query.modalpurchaseconfirmation === "true" ? true : false;
  const modalItemPurchaseCompleted =
    query.modalpurchasecompleted === "true" ? true : false;

    

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
    uiContext.openModal(<ModalAvatarFramePurchaseConfirmation id={id} />);
  }
  function openmodalItemPurchaseCompleted(id) {
    uiContext.openModal(<ModalAvatarFramePurchaseCompleted id={id} />);
  }

  useEffect(() => {
    setSelectedShopsection(prototype.getShopsectionByID(1));
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
                      <span>Avatar frames</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="header-content">
              <div className="header-body">
                <h1>Avatar frames</h1>
                <p className="text-ui-300 max-w-[70ch] mt-4">
                  Add beautiful frames around your avatar and stand out from the
                  crowd.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672216041/Stryda/illustrations/Shop_bg.jpg" />
            </div>
          </div>
        </section>

        <section className="mb-4 lg:mb-8">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 mt-3">
            {selectedShopsection.items?.sort((itemA, itemB) => itemB.price - itemA.price).map((item, itemIndex) => (
              <>
                <li
                  key={item.id}
                  className="w-full surface rounded-2xl p-4 flex flex-col items-stretch text-center animate-slide-in-right animate-delay"
                  style={{
                    "--delay": `calc( ${itemIndex} * 0.05s)`,
                  }}
                >
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="avatar avatar-circle avatar-xl my-3">
                      <img src={item.image} alt="" />
                      <div>
                        <img
                          src={prototype.getUserByID(1)?.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="mb-3 text-ui-300 uppercase text-xl">
                      {item.name}
                    </div>
                  </div>
                  <div className="border-t border-ui-700 pt-4">
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
                                className="button button-primary button-currency button-coin w-full"
                              >
                                <div>
                                  <span>Purchase</span>
                                </div>
                                <div>
                                  <span className="icon icon-coin" />
                                  <span>{numberWithSpaces(item.price)}</span>
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
                                  className="button button-primary button-currency button-coin w-full is-disabled"
                                >
                                  <div>
                                    <span>Purchase</span>
                                  </div>
                                  <div>
                                    <span className="icon icon-coin" />
                                    <span>{numberWithSpaces(item.price)}</span>
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
          </ul>
        </section>
      </PrototypeStructure>
    </>
  );
}
