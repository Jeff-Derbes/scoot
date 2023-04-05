import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ThreeCardSection from "@/components/ThreeCardSection/ThreeCardSection";
import LearnMore from "@/components/LearnMoreSection/LearnMore";
import telemetry from '@/public/assets/images/telemetry.jpg'

export default function Home() {
    return (
        <>
            <Header/>

            <main>
                <section>
                    <Hero/>
                </section>

                <section>
                    <ThreeCardSection/>
                </section>

                <section>
                    <LearnMore button={true} header={'Easy to use\n' +
                        'riding telemetry'}
                               content={'The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you\'ve been using the scooter, your traveling distance, and many more things all in an easy to use app.'}
                    image={telemetry} flipped={true} />
                </section>
            </main>
        </>
    );
}
