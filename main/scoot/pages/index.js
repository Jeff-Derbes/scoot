import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ThreeCardSection from "@/components/ThreeCardSection/ThreeCardSection";

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
            </main>
        </>
    );
}
