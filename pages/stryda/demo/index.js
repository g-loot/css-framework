import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Demo() {
  const projects = [
    {
      id: 0,
      name: "Achievement unlocked",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-achievement-unlocked",
    },
    {
      id: 1,
      name: "Purchase completed",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-purchase-completed",
    },
    {
      id: 2,
      name: "Level up",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-level-up",
    },
    {
      id: 3,
      name: "Battle Pass summary",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-battlepass-summary",
    },
    {
      id: 4,
      name: "Mission revealed",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-mission-revealed",
    },
    {
      id: 5,
      name: "Battlepass",
      images: "thumbnail-rankup.jpg",
      url: "/stryda/demo/demo-battlepass",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Demo — Stryda v3</title>
        <meta name="description" content="Stryda Prototype" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png"
        />
      </Head>
      <div className="absolute inset-0 p-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl grid md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-4 p-4">
          {projects
            .slice(0)
            .reverse()
            .map((item, itemIndex) => (
              <Link href={item.url} key={itemIndex}>
                <div
                  className="w-full animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                >
                  <div
                    className={`surface hover:-translate-y-2 duration-300 ease interactive text-center overflow-hidden flex flex-col w-full ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <img
                      src={`/images/thumbnails/${item.images}`}
                      alt={item.name}
                      className="aspect-video w-full bg-black/10"
                    />
                    <div className="flex-1 p-4 border-t-2 border-cloud-burst-color">
                      <h2 className="text-xl">{item.name}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
