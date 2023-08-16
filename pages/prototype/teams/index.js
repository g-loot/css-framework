import Ad from "@/components/Ad/Ad";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

const Teams = [
  {
    id: 1,
    name: "Team name",
    tag: "GT2",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png",
    members: [
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "GhOOOsTS",
    tag: "GhO",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_GhOOOsTS.png",
    members: [
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Foxy",
    tag: "Fox",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Foxy.png",
    members: [
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_7.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "l10n",
    tag: "LI",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png",
    members: [
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_8.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg",
      },
      {
        avatar:
          "https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg",
      },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { data, loading } = useFetch("/api/ladders", { delay: 1000 });

  
  return (
    <>
      <PrototypeStructure title="Teams">
        <Ad width="1005" height="124" />
        <section className="mb-4">
          <div
            className="surface md:rounded-lg p-4 lg:p-8 bg-cover bg-left"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/gloot/image/upload/v1657121339/Marketing/2022_prototype/Teams_bg.webp)",
            }}
          >
            <div className="">
              <h1 className="text-3xl leading-none">Teams</h1>
              <p className="leading-relaxed text-ui-300 mt-4 mb-6">
                Want to be the next big thing or just play more with your
                friends?
                <br />
                Compare your stats and join tournaments and Showdowns together.
                <br />
                Create or join a team today.
              </p>
              <div className="flex gap-2">
                <button type="button" className="button button-primary">
                  <span>Create a team</span>
                </button>
                <button type="button" className="button button-secondary">
                  <span>Join a team</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-0">
          <h2 className="px-2 sm:px-0 py-2 text-2xl">My teams</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Teams.map((team, teamIndex) => (
              <>
                <li
                  key={team}
                  className="animate-slide-in-right animate-delay"
                  style={{ "--delay": `calc( ${teamIndex} * 0.05s)` }}
                >
                  <div className="surface surface-dimmed hover:scale-95 interactive rounded-xl p-4 flex flex-col gap-4 items-center">
                    <div className="avatar avatar-squircle">
                      <div>
                        <img src={team.avatar} />
                      </div>
                    </div>
                    <h3 className="text-xl not-italic flex gap-2">
                      <span className="max-w-[20ch] whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {team.name}
                      </span>
                      <span className="chip chip-sm chip-secondary">
                        <span>[{team.tag}]</span>
                      </span>
                    </h3>
                    <div className="rounded-full p-0.5 surface surface-ui-600 flex items-center pr-3">
                      <div className="avatar-group -space-x-2 bg-ui-800 rounded-full">
                        {team.members.map((teamMember, teamMemberIndex) => (
                          <div
                            key={teamMember}
                            className="avatar avatar-simple avatar-circle avatar-xs"
                          >
                            <div className="">
                              <img src={teamMember.avatar} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pl-2 text-sm text-ui-300">
                        + 3 members
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </section>
      </PrototypeStructure>
    </>
  );
}
