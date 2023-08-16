import React, { useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype.js";
import Slider from "../../../../components/Slider/Slider.js";
import Link from "next/link.js";

export default function ModalAvatarEdit(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [selectedShopsection, setSelectedShopsection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const id = Math.round(props.id) || false;
  const prototype = usePrototypeData();
  const [selectedFrame, setSelectedFrame] = useState(id);

  useEffect(() => {
    setSelectedShopsection(prototype.getShopsectionByID(1));
  }, []);

  const handlechange = (event) => {
    if (event.target.value === 0) {
      setSelectedFrame(false);
    } else {
      setSelectedFrame(event.target.value);
    }
  };

  function closeModalWithDelay(id) {
    setSubmitting(true);
    window.location.href = `/prototype/profile/1?avatarframe=${selectedFrame}`;
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

  function swapAvatarFrame(id) {
    console.log(id);
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal w-full">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Edit avatar</h2>
              <div className="border-t border-ui-700 mt-4 pt-8">
                <div className="grid place-items-center center">
                  <div className="relative">
                    <div className="avatar avatar-xl avatar-circle z-0">
                      {selectedFrame && (
                        <img
                          src={
                            prototype.getShopitemByID(1, selectedFrame)?.image
                          }
                          alt=""
                        />
                      )}
                      <div>
                        <img
                          src={prototype.getUserByID(1)?.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="form-group absolute z-10 bottom-0 right-0">
                      <label
                        htmlFor="file-button"
                        className="button button-sm button-tertiary rounded-full"
                      >
                        <span className="icon icon-camera" />
                      </label>
                      <input
                        type="file"
                        name="file-button"
                        id="file-button"
                        aria-describedby="file_input_help"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ui-850 rounded mt-8">
                <Slider
                  itemWidth={128 + 16}
                  bgColor="from-ui-850 via-ui-850/90 to-ui-850/0"
                >
                  <div className="form-group flex justify-center gap-4 px-4">
                    <label className="form-checkbox form-image">
                      <input
                        type="radio"
                        name="avatarframe-radio"
                        value={0}
                        onChange={handlechange}
                      />
                      <span className="sr-only">Valorant</span>
                      <div className="w-32 h-32 rounded-md flex items-center justify-center p-4 text-center">
                        <div>
                          <div className="avatar avatar-circle avatar-sm my-3 mx-auto">
                            <div>
                              <img
                                src={prototype.getUserByID(1)?.avatar}
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div className="text-ui-300 uppercase">Normal</div>
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
                              <div className="w-32 h-32 rounded-md flex items-center justify-center p-4 text-center">
                                <div>
                                  <div className="avatar avatar-circle avatar-sm my-3 mx-auto">
                                    <img src={item.image} alt="" />
                                    <div>
                                      <img
                                        src={prototype.getUserByID(1)?.avatar}
                                        alt="avatar"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          )}
                        </>
                      ))}
                  </div>
                </Slider>
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
                    and check out our latest avatar frames.
                  </p>
                </div>
                <img
                  className="md:order-2 md:w-1/2 px-8 mt-8 md:mt-0"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674215034/Stryda/illustrations/shop_avatarframes.png"
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
