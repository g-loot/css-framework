import { useContext, useEffect, useState } from "react";
import Structure from "@/pages/stryda/components/Structure";
import { dataPatchNotes } from "@/mock-data/data-patchnotes";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
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

export default function Premium() {
  const router = useRouter();
  const { note_slug } = router.query;
  const [note, setNote] = useState(undefined);
  const prototype = usePrototypeData();

  const getNoteBySlug = (slug) => {
    return dataPatchNotes.find((note) => {
      return note.slug === slug;
    });
  };

  useEffect(() => {
    setNote(getNoteBySlug(note_slug));
    console.log(note);
  }, [note_slug]);

  useEffect(() => {
    inViewport("[class*=animate-]");
  }, [note]);

  return (
    <>
      <Structure title={note?.name}>
        {note && (
          <>
            <section className="relative py-36 overflow-hidden">
              <div className="absolute z-30 top-0 inset-x-0">
                <div className="container max-w-md mx-auto px-6 md:px-0">
                  <nav className="breadcrumbs" aria-label="Breadcrumb">
                    <ol>
                      <li>
                        <Link
                          href={`/stryda/patch-notes${prototype.getURLparams()}`}
                        >
                          <a>
                            <span>Patch notes</span>
                          </a>
                        </Link>
                      </li>
                      <li aria-current="page">
                        <div>
                          <span>{note.slug}</span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="container relative z-20 text-center px-6 sm:px-0 drop-shadow-md">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1686209617/Stryda/logos/Stryda_patch_notes_logo.svg"
                  alt=""
                  className="h-14 sm:h-20 w-auto mx-auto my-4 animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(1 * 0.05s)",
                  }}
                />
                <h1
                  className="h2 sm:mx-auto animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  {note.name}
                </h1>
              </div>
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1686211336/Stryda/illustrations/Stryda_patch_notes_hero_bg.png"
                  alt=""
                  className="absolute z-0 h-full w-auto md:max-w-sm mx-auto animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc(3 * 0.05s)",
                  }}
                />
              </div>
              <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/0 via-ui-900/0 to-ui-900/90" />
            </section>
            <section className="relative px-6 sm:px-0 space-y-8 pb-16 sm:pb-24 bg-ui-900/90 -mb-24">
              {note.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container max-w-md surface sm:rounded-[0.5rem] px-6 py-8 animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc((" + sectionIndex + " + 4) * 0.05s)",
                  }}
                >
                  <div className="flex gap-2 items-center group mb-8">
                    <h3 className="h4">{section.name}</h3>
                  </div>
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
            </section>
          </>
        )}
      </Structure>
    </>
  );
}
