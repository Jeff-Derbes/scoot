import LearnMore from "@/components/LearnMoreSection/LearnMore";
import PageHero from "@/components/PageHero/PageHero";
import digitalEra from "@/public/assets/images/digital-era.jpg";
import betterLiving from "@/public/assets/images/better-living.jpg";

export default function About() {
  return (
    <div>
      <PageHero
        title={"About"}
        backgroundImage={"/assets/images/about-hero-desktop.jpg"}
      />

      <section>
        <LearnMore
          header={"Mobility for the digital era"}
          content={
            "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          }
          image={digitalEra}
          hasArrow={true}
          arrowFlipped={true}
        />

        <LearnMore
          header={"Better urban living"}
          content={
            "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          }
          image={betterLiving}
          hasArrow={true}
          arrowFlipped={false}
          shortArrow={true}
          arrowTop={true}
          flipped={true}
        />
      </section>
    </div>
  );
}
