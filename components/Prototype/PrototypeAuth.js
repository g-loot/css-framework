import Ad from "../Ad/Ad";
import Footer from "../Footer/Footer";
import Link from "next/link";
import PrototypeHead from "./PrototypeHead";
import PrototypeLeftMenu from "./PrototypeLeftMenu";
import PrototypeLeftMenuNew from "./PrototypeLeftMenuNew";
import Topbar from "../Topbar/Topbar";
import TopbarNew from "../Topbar/TopbarNew";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import React, { useContext } from "react";

export default function PrototypeAuth({ children, title }) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const hasContentCard = query.contentcard === "true" ? true : false;
  const isNewStructure =
    query.newstructure === "true" || query.newstructure === undefined
      ? true
      : false;
  const variables = useContext(VariablesContext);
  return (
    <>
      <PrototypeHead title={title} />
      <div className="min-h-[100dvh] flex items-stretch bg-main">
        <div className="w-full lg:w-2/3 bg-ui-900 relative z-20">
          <div className="absolute z-10 inset-0 overflow-y-auto overflow-x-hidden scrollbar scrollbar-secondary flex flex-col justify-start items-center mx-2 md:mx-auto">
            <div className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8">
              {children}
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative z-10">
          <div className="absolute z-10 inset-0 overflow-y-auto overflow-x-hidden scrollbar-hidden flex flex-col justify-start items-center mx-2 md:mx-auto">
            <div className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8">
              <div className="max-w-xs mb-8">
                <h1 className="text-left md:text-left text-ui-900 leading-[82px]">
                  <span className="text-3xl font-body font-normal leading-[20px]">
                    Home of
                  </span>
                  <br />
                  <span className="text-9xl">Everyday</span>
                  <br />
                  <span className="text-9xl">Esports</span>
                </h1>
                <p className="text-ui-900 text-lg">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute z-0 bottom-0 top-1/3 right-0">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1673204805/Stryda/illustrations/3D_logo_BG.png"
              alt=""
              className="w-full h-full object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
      {/*
    <div className="bg-main fixed inset-0 overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center mx-2 md:mx-auto">
        <div className="w-full flex-1 m-auto flex flex-col justify-center items-center py-8">
          {children}
        </div>
      </div>  
  */}
    </>
  );
}
