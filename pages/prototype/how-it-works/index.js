import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

const HowItWorksTabs = [
  {
    id: 1,
    subtitle: "Missions",
    title: "Compete & earn XP",
    slug: "missions",
    icon: "icon-missions",
    img: "",
    content: [
      {
        type: "p",
        text: "In special cases G-Loot, League Operations, and Tournament Operators reserve the right to override. remove, and/or add any rule stated below to guarantee fair play.",
      },
    ],
  },
  {
    id: 2,
    subtitle: "Missions Rewards",
    title: "Reach milestione & ulock rewards",
    slug: "missions-rewards",
    icon: "icon-military-medal",
    img: "",
    content: [
      {
        type: "p",
        text: "In special cases G-Loot, League Operations, and Tournament Operators reserve the right to override. remove, and/or add any rule stated below to guarantee fair play.",
      },
    ],
  },
];

export default function HowItWorks() {
  const router = useRouter();
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;

  return (
    <>
      <PrototypeStructure title="How it works">
        <section
          className="animate-slide-in-bottom animate-delay mb-4"
          style={{ "--delay": "calc(0 * 0.05s)" }}
        >
          <div className="header surface rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1 className="text-4xl mb-4 leading-none">How G-Loot works</h1>
                <p className="text-ui-300 max-w-[70ch] mb-2">
                  G-Loot is an esports platform for PC where you can track your
                  gaming stats, play G-Loot Missions in your favorite games, and
                  compete in competitions and tournaments.
                </p>
                <p className="text-ui-300 max-w-[70ch]">
                  Prove to the world (and yourself) that you have got the skills
                  and win cool prizes.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp" />
            </div>
          </div>
        </section>
        <section
          className="flex flex-col lg:flex-row gap-4 lg:items-stretch animate-slide-in-bottom animate-delay mb-4"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          <div className="lg:w-1/3 xl:w-3/7 space-y-4 flex flex-col">
            <ul className="items-spaced item-interactive space-y-2">
              {HowItWorksTabs.map((item, itemIndex) => (
                <li key={item.id} className={`item ${selectedTab === item.slug ? 'is-active' : ''}`}>
                  <div className="item-body">
                    <div className="text-ui-300 text-xs uppercase">{item.subtitle}</div>
                    <div className="text-ui-100 item-title">{item.title}</div>
                  </div>
                  <div className="item-actions">
                    <div>
                      <span className={`icon text-3xl ${item.icon}`} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">

          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
