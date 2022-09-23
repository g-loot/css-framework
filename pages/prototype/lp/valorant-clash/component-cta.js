import Image from "next/image";

export default function ValorantClashCTA(props) {
  return (
    <>
      <section
        className="py-24 relative animate-slide-in-bottom animate-delay"
        style={{ '--delay': 'calc(4 * 0.1s)' }}>
        <div className="relative z-10 container max-w-lg mx-auto text-center">
          <img
            className="mx-auto"
            src="https://res.cloudinary.com/gloot/image/upload/v1663684817/Marketing/2022_Valorant_clash/G-Loot_Valorant_Clash_Logo.svg"
            width="600"
            height="auto"
            alt=""
          />
        </div>
        <span
          className="absolute bg-contain bg-center bg-no-repeat animate-pulse inset-0 mix-blend-lighten"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/gloot/image/upload/v1663762472/Marketing/2022_Valorant_clash/Valorant_Clash_effect_triangle.svg)',
          }}
        />
        <div className="absolute top-0 right-0 mix-blend-lighten hidden md:block w-[650px] h-[458px]">
          <Image
            data-aos="fade-left"
            src="https://res.cloudinary.com/gloot/image/upload/v1663762265/Marketing/2022_Valorant_clash/Valorant_Clash_hero_character_2.jpg"
            alt=""
            layout="responsive"
            width={650}
            height={458}
            quality={100}
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 mix-blend-lighten hidden md:block w-[650px] h-[458px]">
          <Image
            data-aos="fade-right"
            src="https://res.cloudinary.com/gloot/image/upload/v1663762265/Marketing/2022_Valorant_clash/Valorant_Clash_hero_character_1.jpg"
            alt=""
            layout="responsive"
            width={650}
            height={458}
            quality={100}
            priority
          />
        </div>
      </section>
    </>
  )
}
