import React, { useRef, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Link from "next/link";
import { usePrototypeData } from "../../contexts/prototype";

export default function FAQ(props) {
  const prototype = usePrototypeData();  
  
  return (
    <>
      <Accordion
        header={
          <>
            <div className="item">
              <div className="item-body">
                <div className="p-2 item-title font-headings font-bold text-lg italic">
                  {props.content.title}
                </div>
              </div>
              <div className="item-actions">
                <div>
                  <span className="icon icon-24 icon-arrow-sm-down" />
                </div>
              </div>
            </div>
          </>
        }
      >
        <div className="p-4 md:p-8">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {props.content.image && (
              <div className="col-span-1 surface rounded-lg overflow-hidden">
              <img
                src={props.content.image}
                width="100%"
                height="auto"
                className=""
              />
              </div>
            )}
            <div className="col-span-2 md:columns-2 text-ui-300 space-y-4 leading-relaxed">
              {props.content.content?.map((content, contentIndex) => (
                <>
                  {content.type === "p" && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.text,
                      }}
                    />
                  )}
                  {content.type === "h3" && (
                    <h3 className="h5 mb-4">{content.text}</h3>
                  )}
                  {content.type === "ul" && (
                    <ul className=" list-outside pl-8 list-disc space-y-4 ">
                      {content.text.map((listItem, listItemIndex) => (
                        <li
                          key={listItemIndex}
                          dangerouslySetInnerHTML={{
                            __html: listItem,
                          }}
                        />
                      ))}
                    </ul>
                  )}
                </>
              ))}

              {props.content.hasButtonReward && (
                <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                  <a className="button button-premium is-shining">
                    <span>Join G-Loot Premium</span>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Accordion>
    </>
  );
}
