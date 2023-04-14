import LearnMore from "@/components/LearnMoreSection/LearnMore";
import PageHero from "@/components/PageHero/PageHero";
import digitalEra from "@/public/assets/images/digital-era.jpg";
import betterLiving from "@/public/assets/images/better-living.jpg";
import InfoBubble from "@/components/InfoBubble/InfoBubble";
import ourTech from "@/public/assets/images/our-tech.jpg";
import ourIntegrityy from "@/public/assets/images/our-integrity.jpg";
import ourCommunity from "@/public/assets/images/our-community.jpg";

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

      <section>
        <h2 className="section-header">Our tech</h2>
        <div className="container">
          <InfoBubble
            image={ourTech}
            count={"01"}
            header={"Our tech"}
            text={
              "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
            }
          />

          <InfoBubble
            image={ourIntegrityy}
            count={"02"}
            header={"Our integrity"}
            text={
              "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
            }
          />

          <InfoBubble
            image={ourCommunity}
            count={"03"}
            header={"Our community"}
            text={
              "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
            }
          />
        </div>
      </section>
    </div>
  );
}
