import React, { useContext, useState, useEffect } from "react";
import { UiContext } from "../../../../contexts/ui.js";
import { VariablesContext } from "../../../../contexts/variables";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import Slider from "../../../../components/Slider/Slider.js";
import Link from "next/link.js";

export default function ModalBannerEdit(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [selectedShopsection, setSelectedShopsection] = useState(2);
  const [submitting, setSubmitting] = useState(false);
  const id = Math.round(props.id) || false;
  const prototype = usePrototypeData();
  const [selectedBanner, setSelectedBanner] = useState(id);

  useEffect(() => {
    setSelectedShopsection(prototype.getShopsectionByID(2));
  }, []);

  const handlechange = (event) => {
    if (event.target.value === 0) {
      setSelectedBanner(false);
    } else {
      setSelectedBanner(event.target.value);
    }
  };

  function closeModalWithDelay(id) {
    setSubmitting(true);
    window.location.href = `/prototype/profile/1?profilebanner=${selectedBanner}`;
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal w-full">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Edit banner</h2>
              <div className="bg-ui-850 rounded mt-8">
                <div className="form-group grid md:grid-cols-2 gap-4 p-4 max-h-[300px] scrollbar-desktop overflow-y-auto">
                  <label className="form-checkbox form-image">
                    <input
                      type="radio"
                      name="avatarframe-radio"
                      value={0}
                      onChange={handlechange}
                    />
                    <span className="sr-only">Valorant</span>
                    <div className="w-full aspect-landscape rounded-md flex items-center justify-center text-center">
                      <div>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                          className="aspect-landscape object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                  {selectedShopsection.items
                    ?.sort((itemA, itemB) => itemB.price - itemA.price)
                    .map((item, itemIndex) => (
                      <>
                        {item.isOwned && (
                          <label
                            className="form-checkbox form-image"
                            key={item.id}
                          >
                            <input
                              type="radio"
                              name="avatarframe-radio"
                              value={item.id}
                              onChange={handlechange}
                              defaultChecked={item.id === id}
                            />
                            <span className="sr-only">{item.name}</span>
                            <div className="w-full aspect-landscape rounded-md flex items-center justify-center text-center">
                              <div>
                                <img
                                  src={item.image}
                                  className="aspect-landscape object-cover"
                                  alt=""
                                />
                              </div>
                            </div>
                          </label>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div className="bg-ui-600 rounded mt-8 flex flex-col lg:flex-row items-center">
                <div className="relative z-10 px-4 py-8 order-2 md:order-1 text-center md:text-left">
                  <h3>Looking for more?</h3>
                  <p className="text-base leading-tight text-ui-300 mt-2 mb-4 max-w-[30ch] ">
                    Head to the{" "}
                    <Link
                      href={`/prototype/shop/avatar-frame${prototype.getURLparams()}`}
                    >
                      <a href="" className="link link-main">
                        shop
                      </a>
                    </Link>{" "}
                    and check out our latest player banners.
                  </p>
                </div>
                <img
                  className="md:order-2 md:w-1/2 px-8 mt-8 md:mt-0"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674215034/Stryda/illustrations/shop_profilebanners.png"
                  alt=""
                />
              </div>
            </div>
            <div className="modal-action justify-center">
              <button
                type="button"
                onClick={closeModalWithDelay}
                className={`flex-1 button button-primary ${
                  submitting ? "is-loading" : ""
                }`}
              >
                <span>Save</span>
              </button>
              <button
                className="flex-1 button button-secondary w-32"
                onClick={uiContext.closeModal}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
