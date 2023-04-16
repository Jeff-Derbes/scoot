import LearnMore from "@/components/LearnMoreSection/LearnMore";
import PageHero from "@/components/PageHero/PageHero";
import digitalEra from "@/public/assets/images/digital-era.jpg";
import betterLiving from "@/public/assets/images/better-living.jpg";
import InfoBubble from "@/components/InfoBubble/InfoBubble";
import ourTech from "@/public/assets/images/our-tech.jpg";
import ourIntegrityy from "@/public/assets/images/our-integrity.jpg";
import ourCommunity from "@/public/assets/images/our-community.jpg";
import FaqCard from "@/components/FaqCard/FaqCard";
import FaqContainer from "@/components/FaqContainer/FaqContainer";

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
      <section>
        <h2 className="section-header">FAQs</h2>
        <FaqContainer header={"How it works"}>
          <FaqCard
            question={"How do I download the app?"}
            answer={
              "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            }
          />
          <FaqCard
            question={"Can I find a nearby Scoots?"}
            answer={
              "Yes! You can find a nearby Scoot by using the app. Once you’ve downloaded the app, you can use the map to find the nearest Scoot to you. You can also use the app to unlock the Scoot and start your ride."
            }
          />
          <FaqCard
            question={"Do I need a license to ride?"}
            answer={
              "No, you don’t need a license to ride a Scoot. However, you do need to be at least 18 years old to ride a Scoot. You also need to be able to ride a bike and have a valid credit card to unlock the Scoot."
            }
          />
        </FaqContainer>

        <FaqContainer header={"Safe driving"}>
          <FaqCard
            question={"Should I wear a helmet?"}
            answer={
              "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
            }
          />
          <FaqCard
            question={"How about the rules & regulations?"}
            answer={
              "We follow all local laws and regulations. We also have a dedicated team of Scoot Safety Officers who are responsible for ensuring that all Scooters are parked safely and responsibly. If you see a Scoot parked in a dangerous or illegal way, please report it to us via the app."
            }
          />
          <FaqCard
            question={"What if I damage my Scoot?"}
            answer={
              "If you damage your Scoot, please report it to us via the app. We’ll then send you a link to a form where you can report the damage. We’ll then get in touch with you to arrange a time to pick up the Scoot and fix it."
            }
          />
        </FaqContainer>
      </section>
    </div>
  );
}
