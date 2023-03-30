import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
    return (
        <>
            <Header/>

            <main>
                <section>
                    <Hero/>
                </section>
            </main>
        </>
    );
}
