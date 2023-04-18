import PageHero from "@/components/PageHero/PageHero";
import Image from "next/image";
import worldMapDesktop from "@/public/assets/images/world-map-desktop.png";

export default function Careers() {
  return (
    <div>
      <PageHero
        title={"Locations"}
        backgroundImage={"/assets/images/about-hero-desktop.jpg"}
      />

      <section>
        <div className="container">
          <Image src={worldMapDesktop} width={1100} height={600} />
        </div>
      </section>

      <section></section>
    </div>
  );
}
