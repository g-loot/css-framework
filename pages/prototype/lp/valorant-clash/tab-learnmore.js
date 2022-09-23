import { Parallax } from "react-parallax";
import ValorantClashCTA from "./component-cta";

export default function ValorantClashTabLearnMore() {
  return (
    <>
      <section
        className="pt-12 pb-24 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.1s)" }}
      >
        <div className="container max-w-lg mx-auto px-4">
          <iframe
            className="mx-auto aspect-video rounded-xl mb-24"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/H9radMFO1h0?autoplay=1&mute=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&loop=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div
            className="text-center space-y-8 !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000"
            data-aos="fade-up"
          >
            <h2 className="text-center text-ui-100 max-w-md mx-auto">
              <span className="text-main">G-Loot</span> VALORANT Clash for the
              VALORANT Champions Tour 2022 Off-season!
            </h2>
            <div className="max-w-[60ch] mx-auto space-y-8">
            <p className="text-lg text-ui-300 leading-loose">
              The tournament is a part of the VALORANT Championship Tour
              OFF//SEASON in partnership with Riot Games and features invited
              VALORANT pro teams as well as a chance for anyone else to qualify.
              The tournament will culminate in November with a prize pool of
              $50,000.
            </p>
            <p className="text-lg text-ui-300 leading-loose">
              The event will take place in three stages, which will include
              Qualifiers, G-Loot Showdown, and the Grand Finals, and will run
              from October 21 to November 27. The G-Loot Showdown on October
              28-30 and the Grand Finals on November 25-27 will be broadcast
              live from Stockholm with a team of professional casters and
              analysts.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="animate-slide-in-bottom animate-delay bg-ui-800 overflow-hidden"
        style={{ "--delay": "calc(2 * 0.1s)" }}
      >
        <Parallax
          className="relative py-24"
          blur={0}
          bgImage="https://res.cloudinary.com/gloot/image/upload/v1663763819/Marketing/2022_Valorant_clash/Valorant_Clash_separator_4.webp"
          bgImageAlt=""
          strength={100}
        >
          <div
            className="relative z-10 container max-w-lg mx-auto text-center !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000"
          >
            <h2 className="mb-8">Clash dates</h2>
            <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-center whitespace-nowrap px-4 lg:px-0">
              <div className="p-4 transition-delay !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000" data-aos="fade-up" style={{ "--delay": "calc(1 * 0.1s)" }}>
                <h3 className="text-ui-200">Qualifiers</h3>
                <p className="font-headings uppercase tracking-wider text-xl text-ui-300">
                  October
                </p>
              </div>
              <span className="bg-ui-100 opacity-25 h-px w-full lg:w-px lg:h-auto" data-aos="flip-up" />
              <div className="p-4 transition-delay !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000" data-aos="fade-up" style={{ "--delay": "calc(2 * 0.1s)" }}>
                <h3 className="text-ui-100">Showdown</h3>
                <p className="font-headings uppercase tracking-wider text-xl text-ui-300">
                  October 28-30
                </p>
              </div>
              <span className="bg-ui-100 opacity-25 h-px w-full lg:w-px lg:h-auto" data-aos="flip-up" />
              <div className="p-4 transition-delay !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000" data-aos="fade-up" style={{ "--delay": "calc(3 * 0.1s)" }}>
                <h3 className="text-main">Grand Final</h3>
                <p className="font-headings uppercase tracking-wider text-xl text-ui-300">
                  November 25-27
                </p>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="bg-gradient-to-b from-ui-900/50 via-ui-900/0 to-ui-900/50 absolute z-0 inset-0" />
      </section>
      <section
        className="py-24 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(3 * 0.1s)" }}
      >
        <div
          className="container max-w-lg mx-auto text-center !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000"
          data-aos="fade-up"
        >
          <h2 className="mb-8">Format</h2>
          <div className="max-w-[60ch] mx-auto space-y-8 px-4 lg:px-0">
            <p className="text-lg text-ui-300 leading-loose">
              The tournament will feature invited pro teams from VCT in the EMEA
              region as well as a chance for anyone else to qualify.
            </p>
            <p className="text-lg text-ui-300 leading-loose">
              There will be three separate qualifiers: EU West, EU East, and
              Turkey &amp; MENA. Besides the qualifiers, the top teams from the
              G-Loot Brawl will also get a chance. Qualified teams and Brawl
              teams will face off in the Monthly Showdown that will take place
              in October.
            </p>
            <p className="text-lg text-ui-300 leading-loose">
              The Grand Final will showcase 16 teams competing against one
              another and will feature a full-on production live with analysts &
              commentators from Stockholm, Sweden.
            </p>
            <p className="text-lg text-ui-300 leading-loose">
              The exact format for the tournament will be announced when the
              signup starts.
            </p>
          </div>
        </div>
      </section>
      <section
        className="animate-slide-in-bottom animate-delay bg-ui-800 overflow-hidden"
        style={{ "--delay": "calc(4 * 0.1s)" }}
      >
        <Parallax
          className="relative py-24"
          blur={0}
          bgImage="https://res.cloudinary.com/gloot/image/upload/v1663763819/Marketing/2022_Valorant_clash/Valorant_Clash_separator_5.webp"
          bgImageAlt=""
          strength={100}
        >
          <div
            className="relative z-10 container max-w-sm mx-auto text-center !ease-[cubic-bezier(.7,0,.3,1)] !duration-1000"
            data-aos="fade-up"
          >
            <h2 className="mb-8">Contact us</h2>
            <p
              className="text-gradient text-lg leading-loose bg-gradient-to-r from-interaction-500 to-blue-500 animate-slide-in-bottom animate-delay text-center px-4 lg:px-0"
              style={{ "--delay": "calc(2 * 0.1s)" }}
            >
              If you have any questions about the tournament, partnership, team
              invites, sponsorship, or anything else, please reach out to us.
            </p>

            <div className="mt-10 text-center">
              <a
                href="https://discord.gg/gloot"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-lg button-claim w-52"
              >
                <span className="icon icon-discord" />
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </Parallax>
        <div className="bg-gradient-to-b from-ui-900/50 via-ui-900/0 to-ui-900/50 absolute z-0 inset-0" />
      </section>
      <ValorantClashCTA />
    </>
  );
}
