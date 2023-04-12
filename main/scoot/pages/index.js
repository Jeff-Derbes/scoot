import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ThreeCardSection from "@/components/ThreeCardSection/ThreeCardSection";
import LearnMore from "@/components/LearnMoreSection/LearnMore";
import telemetry from "@/public/assets/images/telemetry.jpg";
import city from "@/public/assets/images/near-you.jpg";
import payments from "@/public/assets/images/payments.jpg";
import JoinNow from "@/components/JoinNow/JoinNow";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>

        <section>
          <ThreeCardSection />
        </section>

        <section>
          <LearnMore
            button={true}
            header={"Easy to use\n" + "riding telemetry"}
            content={
              "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
            }
            image={telemetry}
            hasArrow={true}
            arrowFlipped={true}
          />

          <LearnMore
            button={true}
            header={"Coming to a city near you"}
            content={
              "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            }
            image={city}
            flipped={true}
            shortArrow={true}
            hasArrow={true}
            arrowTop={true}
          />

          <LearnMore
            button={true}
            header={"Zero hassle payments"}
            content={
              "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            }
            image={payments}
            hasArrow={true}
            arrowFlipped={true}
            shortArrow={true}
            arrowTop={true}
          />
        </section>
      </main>
    </>
  );
}
