import PageHero from "@/components/PageHero/PageHero";
import ResponsiveImageSection from "@/components/ResponsiveImage/ResponsiveImageSection";
import worldMapDesktop from "@/public/assets/images/world-map-desktop.png";
import worldMapTablet from "@/public/assets/images/world-map-tablet.png";
import worldMapMobile from "@/public/assets/images/world-map-mobile.png";
import Locations from "@/components/Locations/Locations";
import MessageUs from "@/components/MessageUs/MessageUs";

export default function Careers() {
  return (
    <div>
      <PageHero
        title={"Locations"}
        backgroundImage={"/assets/images/about-hero-desktop.jpg"}
      />

      <section>
        <ResponsiveImageSection
          imageDesktop={worldMapDesktop}
          imageTablet={worldMapDesktop}
          imageMobile={worldMapMobile}
        />

        <div>
          <Locations />
        </div>

        <div>
          <MessageUs />
        </div>
      </section>
    </div>
  );
}
