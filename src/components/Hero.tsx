"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import ParticlesComponent from "./Particles";

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
                            options={{
                                strings: [
                                    "Martial Ahadji",
                                    "Software Architect",
                                    "Développeur Full Stack",
                                    "Innovateur",
                                    "UI/UX Designer",
                                    "#Madridista",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 85,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    Je bâtis des solutions digitales qui transforment l'Afrique.
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