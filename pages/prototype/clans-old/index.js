import React, { useContext, useEffect } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import ModalClanCreate from "./modal-clan-create";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Slider from "@/components/Slider/Slider";
import CardClan from "@/components/Card/CardClan";

export default function Clan() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalCreate = query.modalcreate === "true" ? true : false;
  const uiContext = useContext(UiContext);

  function openModalClanCreate() {
    uiContext.openModal(<ModalClanCreate></ModalClanCreate>);
  }

  useEffect(() => {
    if (modalCreate) {
      openModalClanCreate();
    }
  }, [modalCreate]);

  return (
    <>
      <PrototypeStructure title="Clans">
        <Ad width="1005" height="300" />
        <section className="mb-8">
          <div className="header surface sm:rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h2 className="text-3xl sm:text-4xl">
                  Be stronger with Clans!
                </h2>
                <ul className="leading-relaxed text-ui-300 mt-4 list-disc ml-4">
                  <li>
                    Work together in Clan Ladders to earn{" "}
                    <span className="text-ui-100 font-bold">extra Coins</span>.
                  </li>
                  {/*
                        <li>
                          <span className="text-ui-100 font-bold">Compete</span>{" "}
                          in epic Showdowns with your clanmates for big rewards.
                        </li>
  */}
                  <li>
                    Fight to take your Clan to the top of the leaderboard or
                    just{" "}
                    <span className="text-ui-100 font-bold">play for fun</span>.
                  </li>
                  <li>
                    Find the perfect Clan for your playstyle and make{" "}
                    <span className="text-ui-100 font-bold">new friends</span>.
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-bg">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1672219552/Stryda/illustrations/Clans_bg.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <h2 className="px-4 md:px-0 h5">
            Clan(s) you have been invited to:
          </h2>
          <div className="relative">
            <Slider itemWidth={480+16} bgColor="from-ui-900 via-ui-900/90 to-ui-900/0">
              {prototype.clans.map((clan, clanIndex) => (
                <>
                  {clan.hasInvitedYou && (
                    <CardClan key={clan.id} clan={clan} />
                  )}
                </>
              ))}
            </Slider>
          </div>
        </section>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <h2 className="px-4 md:px-0 h5">
            Clans you might like to join:
          </h2>
          <Slider itemWidth={480+16} bgColor="from-ui-900 via-ui-900/90 to-ui-900/0">
              {prototype.clans.map((clan, clanIndex) => (
                <>
                  {!clan.hasInvitedYou && (
                    <CardClan key={clan.id} clan={clan} />
                  )}
                </>
              ))}
            </Slider>
        </section>
        <section
          className=" animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <h2 className="px-4 sm:px-0 pb-4 h5">
            Didn&#39;t find what you were looking for?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface surface-dimmed sm:rounded-lg p-4 relative flex items-center gap-4">
              <div className="-rotate-45 pointer-events-none drop-shadow-lg">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-magnifyingglass.webp"
                  width="140"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed">
                  <p>
                    There are lots of Clans playing all sorts of games with many
                    different attitudes. Check our Clan browser and find the
                    perfect match!
                  </p>
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <Link href="/prototype/clans/search">
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      <span>Browse clans</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="surface surface-dimmed sm:rounded-lg p-4 relative flex items-center gap-4 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(3 * 0.05s)" }}
            >
              <div className="-rotate-45 pointer-events-none drop-shadow-lg">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-star.webp"
                  width="140"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed">
                  <p>
                    Sometimes you’ve got to do it yourself to get it right!
                    Create your own Clan, invite players and reach new heights
                    together.
                  </p>
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <button
                    type="button"
                    className="button button-sm button-primary whitespace-nowrap"
                    onClick={openModalClanCreate}
                  >
                    <span>Create clan</span>
                  </button>
                  <span className="leading-tight hidden">
                    Reach XP XXX to unlock Clan creation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
