import { useContext, useEffect, useState } from "react";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { dataPatchNotes } from "@/mock-data/data-patchnotes";
import Link from "next/link";

const inViewport = (elem) => {
  let allElements = document.querySelectorAll(elem);
  let windowHeight = window.innerHeight;
  const elems = () => {
    for (let i = 0; i < allElements.length; i++) {
      let viewportOffset = allElements[i].getBoundingClientRect();
      let top = viewportOffset.top;
      if (top < windowHeight) {
        allElements[i].classList.add("animate-running");
      } else {
        allElements[i].classList.remove("animate-running");
      }
    }
  };
  elems();
  window.addEventListener("scroll", elems);
};

export default function PatchNotes() {
  useEffect(() => {
    inViewport("[class*=animate-]");
  }, []);

  return (
    <>
      <PrototypeStructure title="Patch notes">
        <section className="relative py-36 overflow-hidden">
          <div className="container relative z-20 text-center px-6 sm:px-0 drop-shadow-md">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1686209617/Stryda/logos/Stryda_patch_notes_logo.svg"
              alt=""
              className="h-14 sm:h-20 w-auto mx-auto my-4 animate-slide-in-bottom animate-delay"
              style={{
                "--delay": "calc(1 * 0.05s)",
              }}
            />
            <h1 className="h1 sm:mx-auto sr-only">Patch notes</h1>
          </div>
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1686211336/Stryda/illustrations/Stryda_patch_notes_hero_bg.png"
              alt=""
              className="absolute z-0 h-auto w-full md:max-w-sm mx-auto animate-slide-in-bottom animate-delay"
              style={{
                "--delay": "calc(2 * 0.05s)",
              }}
            />
          </div>
          <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/0 via-ui-900/0 to-ui-900/90" />
        </section>
        <section className="relative">
          {dataPatchNotes.map((item, itemIndex) => (
            <div key={itemIndex} className="pb-16 sm:pb-20 bg-ui-900/90">
              <div
                className="container max-w-md surface sm:rounded-[0.5rem] relative z-10 animate-slide-in-bottom animate-delay"
                style={{
                  "--delay": "calc((" + itemIndex + " + 3) * 0.05s)",
                }}
              >
                <div className="p-4 border-b border-ui-700 flex items-center gap-4 group">
                  <Link href={`/prototype/patch-notes/${item.slug}`}>
                    <h2 className="interactive">{item.name}</h2>
                  </Link>
                  <Link href={`/prototype/patch-notes/${item.slug}`}>
                    <a className="button button-secondary rounded-full opacity-0 group-hover:opacity-100">
                      <span className="icon icon-url" />
                    </a>
                  </Link>
                </div>
                <div className="px-6 py-8 space-y-8">
                  {item.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="h4 mb-8">{section.name}</h3>
                      <ul className="list-bullet">
                        {section.notes.map((note, noteIndex) => (
                          <li key={noteIndex} className="space-y-4">
                            <div className="[&_a]:underline [&_a]:active:no-underline [&_a]:cursor-pointer [&_a]:hover:opacity-80 [&_a]:active:opacity-80 [&_a]:rounded [&_a]:outline-offset-2 [&_a]:focus-visible:outline [&_a]:focus-visible:outline-main [&_a]:transition-[color,background,transform,opacity] [&_a]:duration-200 [&_a]:ease-in-out [&_b]:text-ui-100 [&_strong]:text-ui-100">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: note.text,
                                }}
                              />
                            </div>
                            {note.image && (
                              <div className="max-w-md">
                                <img
                                  src={note.image}
                                  alt=""
                                  className="w-auto rounded-[0.5rem] max-h-80"
                                />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="pb-48 bg-ui-900/90 -mb-24">
            <ul className="pagination">
              <li>
                <a href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="is-active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
