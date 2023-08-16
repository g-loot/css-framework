import React, { useRef, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";

export default function FAQ(props) {
  const prototype = usePrototypeData(); 
  const isCol = props.isCol || false;
  
  return (
    <>
      <Accordion
        header={
          <>
            <div className="item">
              <div className="item-body">
                <div className="p-2 item-title whitespace-wrap text-lg">
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
          <div className="mx-auto flex flex-col lg:flex-row justify-start items-center gap-8">
            {props.content.image && (
              <img
                src={props.content.image}
                width="auto"
                height="auto"
                className="max-w-sm lg:max-w-xs xl:max-w-sm h-auto"
                alt={props.content.title}
              />
            )}
            <div className={`text-ui-300 space-y-4 leading-relaxed ${isCol ? 'md:columns-2' : 'max-w-[50ch]'}`}>
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
                    <span>Join Stryda Premium</span>
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
