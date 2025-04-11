// import { BriefcaseBusiness } from 'lucide-react'
import { UserCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export default function Presentation() {
    return (
        <section className='relative bg-base-200 z-10 py-40 px-4 w-full'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-10'>
                <div className='flex-1/3'>
                    <Image src={'/profile.png'} alt='profile' width={400} height={400} className='rounded-full' />
                </div>
                <div className="flex-2/3 bg-base-100 p-8 rounded-lg shadow-lg">
                    <UserCircle className='text-primary h-15 w-15 mb-10' />
                    <h2 className='text-4xl font-bold flex items-center text-primary'>Martial Ahadji</h2>
                    <h3 className='text-xl font-medium mb-2 flex items-center text-accent'>
                        Développeur Fullstack
                    </h3>
                    <p className="text-base-content/60 italic">
                        Passionné par la tech, l’IA et le digital, j’accompagne entreprises et particuliers dans la création de solutions innovantes et performantes.
                    </p>
                </div>
            </div>
        </section>
    )
}