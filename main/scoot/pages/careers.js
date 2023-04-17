import LearnMore from "@/components/LearnMoreSection/LearnMore";
import PageHero from "@/components/PageHero/PageHero";
import joinUs from "@/public/assets/images/join-us.jpg";
import betterLiving from "@/public/assets/images/better-living.jpg";
import InfoBubble from "@/components/InfoBubble/InfoBubble";
import ourTech from "@/public/assets/images/our-tech.jpg";
import ourIntegrityy from "@/public/assets/images/our-integrity.jpg";
import ourCommunity from "@/public/assets/images/our-community.jpg";
import JobListings from "@/components/JobListings/JobListings";

export default function Careers() {
  return (
    <div>
      <PageHero
        title={"About"}
        backgroundImage={"/assets/images/about-hero-desktop.jpg"}
      />

      <section>
        <LearnMore
          header={"Care to join us?"}
          content={
            "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          }
          image={joinUs}
          hasArrow={true}
          arrowFlipped={true}
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
        <JobListings />
      </section>
    </div>
  );
}
