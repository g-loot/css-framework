import Link from "next/link";
import { useRouter } from "next/router";

export default function TabLaddersRules() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <section
        className="pt-6 pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="max-w-lg mx-auto gap-8 flex flex-col md:flex-row items-center px-4 sm:px-0">
          <div className="flex-1">
          <img
            className="rounded-lg"
            src="https://res.cloudinary.com/gloot/image/upload/v1676324982/Stryda/illustrations/picture_gamer_4.jpg"
            width="100%"
            height="auto"
            alt=""
          />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl leading-none mb-4">Stryda rules</h2>
            <p className="text-ui-300 leading-relaxed">
              Stryda wants esports to be safe and fun for everyone, so we take
              player protection very seriously and investigate any suspicious
              activity. Make sure you read the rules before your first Ladder, so
              you know what you can and cannot do while playing on Stryda! Here
              are some of our most important rules:
            </p>
          </div>
        </div>
      </section>
      <section
        className="pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0 flex flex-col lg:flex-row text-center gap-8">
          <div className="flex-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1676324396/Stryda/illustrations/stryda-rules-accountsharing.png"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">
              No game account sharing
            </h3>
            <p className="text-ui-300">
              Do not share your game account or your Stryda account with anyone
              (for example: you cannot use the same Valorant account on two
              Stryda accounts). Do not sell or buy game- or Stryda accounts.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1676324455/Stryda/illustrations/stryda-rules-multipleaccountsstryda.png"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">One Stryda account</h3>
            <p className="text-ui-300">
              You may only have one Stryda account. Do not create additional
              Stryda accounts for any reason. Your Stryda account should be in a rank that matches your skill level.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1676324396/Stryda/illustrations/stryda-rules-punish.png"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">No cheating</h3>
            <p className="text-ui-300">
              You should follow the ladder rules and our <a className="link" target="_blank" rel="noreferrer" href="https://stryda.gg/terms-conditions">terms and conditions</a> that you have agreed upon when creating your account. <a className="link" target="_blank" rel="noreferrer" href="https://help.stryda.gg">Click here</a> to read more about what we are considering abusing.
              Cheating and abusing of any kind is a bannable offense. We take
              reports of cheating very seriously and investigate them
              thoroughly.
            </p>
          </div>
        </div>
      </section>
      <section
        className="pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(3 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="col-span-1 md:col-span-2 xl:col-span-1 surface sm:rounded-lg p-4 sm:p-8 flex items-center gap-8">
            <div className="flex flex-col justify-center items-center text-center w-32">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1676324139/Stryda/logos/Stryda_Player_Protection.svg"
                width="100"
                height="auto"
              />
              <span className="text-xs text-ui-300 leading-tight mt-2">
                Ladders protected by Stryda Player Protection
              </span>
            </div>
            <div className="flex-1 border-l border-ui-700 pl-8">
              <h3 className="text-2xl text-ui-200 mb-2 uppercase">Fair Play</h3>
              <div className="text-ui-300">
                <p>We promote Fair Play by:</p>
                <ul className="list-outside list-disc pl-4">
                  <li>
                    Having a set of rules that all players are obligied to
                    follow.
                  </li>
                  <li>Banning users that don’t play by the rules.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 xl:col-span-1 surface sm:rounded-lg p-4 sm:p-8 flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl text-ui-200 mb-2 uppercase">
                Need more help?
              </h3>
              <div className="text-ui-300">
                <p>
                  Join us on Discord and ask questions about the Ladder there.
                  <br />
                  Or, contact Support and send us a ticket.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://help.gloot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-primary"
                  >
                    <span className="icon icon-discord" />
                    <span>Join our Discord</span>
                  </a>
                  <a
                    href="https://help.gloot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-secondary"
                  >
                    <span>Contact support</span>
                    <span className="icon icon-box-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
