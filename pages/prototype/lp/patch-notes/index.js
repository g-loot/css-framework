import React, { useEffect } from "react";

import Footer from "../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../components/TopBarMarketing/TopbarMarketing";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";

const patchNotes = [
  {
    id: 0,
    name: "Patch note 1.0.22",
    sections: [
      {
        id: 0,
        name: "Home",
        notes: [
          {
            id: 0,
            text: "Added a banner to highlight the top 3 placed clans in the BIG CLAN BATTLE - May Edition!",
          },
        ],
      },
      {
        id: 1,
        name: "Achievements",
        notes: [
          {
            id: 0,
            text: "Added achievements to the player profile.",
          },
          {
            id: 1,
            text: "Added notifications that shows every time you earn an achievement.",
          },
          {
            id: 2,
            text: "Added your highest leveled achievement to your player card.",
          },
          {
            id: 2,
            text: "Added a banner to promote the release of achievements.",
            image: "https://cdn.braze.eu/appboy/communication/marketing/content_cards_message_variations/images/6478915e34c0421749a4ca6b/beb8d4963480ac5543e913fba1d757e23f5d22a7/original.png?1685624261"
          },
        ],
      },
      {
        id: 2,
        name: "Ladders",
        notes: [
          {
            id: 0,
            text: "Made improvements to countdowns shown on ladder cards to be more clear when the countdown is on 7 days.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Patch note 1.0.21",
    sections: [
      {
        id: 0,
        name: "General",
        notes: [
          {
            id: 0,
            text: "The premium page and the how-it-works page can now be reached without logging in to the platform.",
            image: "https://res.cloudinary.com/gloot/image/upload/v1680527672/Stryda/illustrations/picture_premium_missions_2.png",
          },
          {
            id: 1,
            text: "SEO improvements adding descriptions and titles to multiple pages.",
          },
        ],
      },
      {
        id: 1,
        name: "Ladders",
        notes: [
          {
            id: 0,
            text: "Performance improvements to enrolling.",
          },
        ],
      },
      {
        id: 2,
        name: "Clan Ladders",
        notes: [
          {
            id: 0,
            text: "Performance improvements to loading.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Patch note 1.0.20",
    sections: [
      {
        id: 0,
        name: "General",
        notes: [
          {
            id: 0,
            text: "Fixed a bug that caused users to get logged out when they shouldnt be i.e after they open their notifications.",
          },
        ],
      },
      {
        id: 1,
        name: "Premium",
        notes: [
          {
            id: 0,
            text: "Changed the color of the avatar frame for premium back to purple.",
            image: "https://res.cloudinary.com/gloot/image/upload/v1680527489/Stryda/illustrations/picture_premium_ladders_2.png",
          },
        ],
      },
      {
        id: 2,
        name: "Ladder results modal",
        notes: [
          {
            id: 0,
            text: "Added avatar frames and player levels of the top 3 players in the modal.",
          },
          {
            id: 1,
            text: "Fixed a bug that was causing the player card to show behind the modal instead of in front.",
          },
        ],
      },
    ],
  },
];

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

const PrototypePage = () => {
  useEffect(() => {
    inViewport("[class*=animate-]");
  }, []);

  return (
    <>
      <TopbarMarketing />

      <div className="min-h-screen">
        <section className="relative pt-60 pb-36 overflow-hidden">
          <div className="container relative z-20 sm:text-center px-6 sm:px-0 drop-shadow-md">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1686209617/Stryda/logos/Stryda_patch_notes_logo.svg"
              alt=""
              className="h-20 w-auto sm:mx-auto animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(2 * 0.05s)",
              }}
            />
            <h1 className="h1 sm:mx-auto sr-only">Patch notes</h1>
          </div>
          <div
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1686211336/Stryda/illustrations/Stryda_patch_notes_hero_bg.png"
              alt=""
              className="fixed z-0 h-[660px] w-auto mx-auto top-0 animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(1 * 0.05s)",
              }}
            />
          </div>
          <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/0 via-ui-900/0 to-ui-900/95" />
        </section>
        {patchNotes.map((item, itemIndex) => (
          <section key={itemIndex} className="relative pb-16 sm:pb-24 bg-ui-900/95">
            <div className="container max-w-md surface sm:rounded relative z-10">
              <div className="p-4 border-b border-ui-700 flex items-center gap-4 group" id={item.name.replace(/\s/g, "")}>
                <h2>{item.name}</h2>
                <a href={`#${item.name.replace(/\s/g, "")}`} class='button button-secondary button-sm rounded-full opacity-0 group-hover:opacity-100'>
                  <span class='icon icon-url' />
                </a>
              </div>
              <div className="px-6 py-8 space-y-8">
                {item.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} id={`${item.name.replace(/\s/g, "")}_${section.id}`}>
                    <div className="flex gap-2 items-center group mb-8">
                      <h3 className="h4">{section.name}</h3>
                      <a href={`#${item.name.replace(/\s/g, "")}_${section.id}`} class='button button-secondary button-xs rounded-full opacity-0 group-hover:opacity-100'>
                        <span class='icon icon-url' />
                      </a>
                    </div>
                    <ul className="list-bullet">
                      {section.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="space-y-4">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: note.text,
                            }}
                          />
                          {note.image && (
                            <div className="max-w-md">
                              <img src={note.image} alt="" className="w-auto rounded-[1rem] max-h-80" />
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
