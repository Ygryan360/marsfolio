import Link from 'next/link';
import React from 'react'

const ctas: cardProps[] = [
    {
        title: "Découvrir mon travail",
        href: "/work",
        variant: "primary",
        description: "Découvrez mes projets récents et mes derniers projets.",
        linkText: "Voir les projets"
    },
    {
        title: "Travaillons ensemble",
        href: "/contact",
        variant: "secondary",
        description: "Contactez moi pour discuter de votre projet.",
        linkText: "Contactez-moi"
    },
]

export default function Cta() {
    return (
        <section className='relative bg-base-100 z-10 py-40 px-4 w-full'>
            <div className="container mx-auto flex flex-wrap justify-center items-center gap-10 ">
                {ctas.map((cta, index) => (
                    <div key={index}>
                        {card(cta)}
                    </div>
                ))}
            </div>
        </section>
    )
}


type cardProps = {
    title: string;
    description: string;
    href: string;
    linkText: string;
    variant: string;
};
function card(cardProps: cardProps) {
    return (
        <div className="card card-border bg-base-200 w-96">
            <div className="card-body">
                <h2 className="card-title">{cardProps.title}</h2>
                <p>{cardProps.description}</p>
                <div className="card-actions justify-end">
                    <Link href={cardProps.href} className={`btn btn-${cardProps.variant}`}>{cardProps.linkText}</Link>
                </div>
            </div>
        </div>
    )
}