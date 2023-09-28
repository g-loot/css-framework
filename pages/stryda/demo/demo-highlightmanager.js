import React from "react";
import Structure from "../components/Structure";
import TopbarHighlights from "../components/TopbarHighlights";

export default function DemoHighlightManager() {
  return (
    <>
      <Structure title="Profile" hiddenUI={true}></Structure>

      <section className="absolute inset-0 p-4 flex items-center justify-center">
        <div className="w-full max-w-xl flex justify-end items-start h-[calc(80dvh)]">
          <TopbarHighlights />
        </div>
      </section>
    </>
  );
}
