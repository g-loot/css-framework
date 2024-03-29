import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalPurchaseConfirmation from "./modal-purchaseconfirmation";
import ModalPurchaseCompleted from "./modal-purchasecompleted";
import Structure from "@/pages/stryda/components/Structure";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [selectedSection, setSelectedSection] = useState(1);
  const [stateError, setStateError] = useState("normal");
  const hasAds = query.ads === "true" ? true : false;
  const { voucher_id } = router.query;
  const modalPurchaseConfirmation =
    query.modalpurchaseconfirmation === "true" ? true : false;
  const modalPurchaseCompleted =
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
    if (modalPurchaseConfirmation) {
      openModalPurchaseConfirmation();
    }
  }, [modalPurchaseConfirmation]);

  useEffect(() => {
    if (modalPurchaseCompleted) {
      openmodalPurchaseCompleted();
    }
  }, [modalPurchaseCompleted]);

  function openModalPurchaseConfirmation(selectedVoucher, section, giftcard) {
    uiContext.openModal(
      <ModalPurchaseConfirmation
        voucher={selectedVoucher}
        section={section}
        giftcard={giftcard}
        state={stateError}
      />
    );
  }
  function openModalPurchaseCompleted(selectedVoucher, section, giftcard) {
    uiContext.openModal(
      <ModalPurchaseCompleted
        voucher={selectedVoucher}
        section={section}
        giftcard={giftcard}
        state={stateError}
      />
    );
  }

  useEffect(() => {
    setSelectedVoucher(prototype.getVoucherByID(voucher_id));
  }, [voucher_id]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <Structure title="Shop">
        <Ad width="1005" height="300" />

        {selectedVoucher && (
          <>
            <section className="mb-4">
              <div className="header header-quaternary my-8">
                <div className="header-breadcrumbs">
                  <nav className="breadcrumbs" aria-label="Breadcrumb">
                    <ol>
                      <li>
                        <Link href={`/stryda/home`}>
                          <a href="#">
                            <span className="icon icon-20 icon-home-2" />
                            <span>Home</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/stryda/shop`}>
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
                    <h1>{selectedVoucher.name}</h1>
                    <p className="max-w-[70ch] mt-4">
                      {selectedVoucher.description}
                    </p>
                  </div>
                </div>
                <div className="header-bg">
                  <img src="https://res.cloudinary.com/gloot/image/upload/v1689683517/Stryda/illustrations/stryda_v2_pagebg_shop.jpg" />
                </div>
              </div>
            </section>
            {selectedVoucher.alert && (
              <div className="alert mx-4 sm:mx-0 rounded-lg alert-attention mb-4 animate-fade-in">
                <div>
                  <span className="icon icon-24 icon-c-info" />
                  <div>
                    <div className="uppercase">
                      {selectedVoucher.alert.title}
                    </div>
                    <p className="max-w-[80ch]">
                      {selectedVoucher.alert.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <nav className="sticky z-40 mb-8 flex justify-start overflow-x-auto scrollbar-hidden px-4 md:px-0 bg-ui-900/95 border-b border-ui-700 top-12">
              <ul className="tabs">
                {selectedVoucher.sections?.map((section, sectionIndex) => (
                  <li key={sectionIndex}>
                    <button
                      type="button"
                      onClick={() => setSelectedSection(section.id)}
                      className={`${
                        section.id === selectedSection ? "is-active" : ""
                      }`}
                    >
                      <span>{section.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {selectedVoucher.sections?.map((section, sectionIndex) => (
              <>
                {section.id === selectedSection && (
                  <section className="my-4 lg:my-8 relative">
                    {section.countries && (
                      <ul className="flex gap-x-3 items-center flex-wrap mt-2 text-ui-300">
                        <li>
                          <span className="uppercase font-bold">Valid in:</span>
                        </li>
                        {section.countries.map((country, countryIndex) => (
                          <li
                            key={countryIndex}
                            className="flex gap-1 items-center"
                          >
                            <div className="w-4 h-4 rounded-full relative overflow-hidden">
                              <img
                                src={`https://flagcdn.com/${country.flag}.svg`}
                                className="object-cover object-center absolute inset-0 w-full h-full"
                              />
                            </div>
                            <span>{country.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 mt-3">
                      {loading ? (
                        <>
                          {section.giftcards.map((giftcard, giftcardIndex) => (
                            <>
                              <li
                                key={giftcardIndex}
                                className="w-full surface rounded is-loading aspect-square"
                              />
                            </>
                          ))}
                        </>
                      ) : (
                        <>
                          {section.giftcards.map((giftcard, giftcardIndex) => (
                            <>
                              <li
                                key={giftcard.id}
                                className="surface rounded w-3/4 sm:w-2/3 md:w-auto p-4 flex flex-col items-stretch text-center animate-slide-in-right animate-delay"
                                style={{
                                  "--delay": `calc( ${giftcardIndex} * 0.05s)`,
                                }}
                              >
                                <div className="flex-1 flex flex-col items-center gap-2">
                                  <div className="py-2 relative">
                                    <div className="w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1"></div>
                                    <div className="w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10"></div>
                                  </div>
                                  <img
                                    src={selectedVoucher.image}
                                    className="w-4/5 rounded-xl shadow-2xl mb-3"
                                    height="auto"
                                    alt="Gift card"
                                  />
                                  <h3 className="h5 leading-none">
                                    Gift card {giftcard.amount}
                                  </h3>
                                  <div className="mb-3 text-lg">
                                    {selectedVoucher.name}
                                  </div>
                                </div>
                                <div className="border-t border-ui-700 pt-4">
                                  <div
                                    className="tooltip"
                                    data-tooltip={`${
                                      stateError === "notenoughfunds"
                                        ? "You don't have enough funds. Get more through Ladders and Battle Pass."
                                        : ""
                                    }${
                                      stateError === "outofstock"
                                        ? "Out of stock."
                                        : ""
                                    }`}
                                    onClick={() =>
                                      openModalPurchaseConfirmation(
                                        selectedVoucher.id,
                                        section.id,
                                        giftcard.id
                                      )
                                    }
                                  >
                                    <button
                                      type="button"
                                      className={`button button-primary button-currency button-coin w-full ${
                                        stateError !== "normal"
                                          ? "is-disabled"
                                          : ""
                                      }`}
                                    >
                                      <div>
                                        <span>Purchase</span>
                                      </div>
                                      <div>
                                        <span className="icon icon-coin" />
                                        <span>
                                          {numberWithSpaces(giftcard.price)}
                                        </span>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </>
                          ))}
                        </>
                      )}
                    </ul>
                  </section>
                )}
              </>
            ))}
            {/* for demo purposes only */}
            {prototype.showDemo && (
              <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
                <div className="absolute top-1 right-1">
                  <button
                    type="button"
                    className="button button-sm button-secondary button-close"
                    onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                </div>
                <div>
                  <h3 className="text-sm">States:</h3>
                  <div className="form-group pl-4 mt-2">
                    <div className="form-xs form-radio">
                      <input
                        type="radio"
                        name="error"
                        id="error-normal"
                        defaultChecked={stateError === "normal"}
                        onChange={() => setStateError("normal")}
                      />
                      <label htmlFor="error-normal">Normal</label>
                    </div>
                    <div className="form-xs form-radio">
                      <input
                        type="radio"
                        name="error"
                        id="error-outofstock"
                        defaultChecked={stateError === "outofstock"}
                        onChange={() => setStateError("outofstock")}
                      />
                      <label htmlFor="error-outofstock">Out of stock</label>
                    </div>
                    <div className="form-xs form-radio">
                      <input
                        type="radio"
                        name="error"
                        id="error-notenoughfunds"
                        defaultChecked={stateError === "notenoughfunds"}
                        onChange={() => setStateError("notenoughfunds")}
                      />
                      <label htmlFor="error-notenoughfunds">
                        Not enough funds
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </Structure>
    </>
  );
}
