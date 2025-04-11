"use client";

import { Button } from "@/components/ui/button";
import ParticlesComponent from "./Particles";
import Typewriter from "./Typewriter";
import Link from "next/link";

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">
            {/* Arrière-plan de particules */}
            <ParticlesComponent
                id="tsparticles"
            />

            {/* Contenu Hero */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Salut, je suis{" "}
                    <span className="text-primary">
                        <Typewriter
                            words={[
                                "Martial Ahadji",
                                "Développeur Fullstack",
                                "Software Architect",
                                "Innovateur",
                                "#Madridista",
                            ]}
                            typingSpeed={100}
                            deletingSpeed={100}
                            pauseDuration={1000}
                        />
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    Je bâtis des solutions digitales qui transforment l&apos;Afrique.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild variant="default" className="btn btn-primary">
                        <Link href="/work">Découvrir mon travail</Link>
                    </Button>
                    <Button asChild variant="outline" className="btn btn-outline btn-secondary">
                        <Link href="/contact">Travaillons ensemble</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}