import { Header } from './components'

import './landing.css'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center container mx-auto">
            <div className="bg-[url('/landing-background.webp')] px-16 bg-cover pb-72 w-full">
                <Header />
                <div className="flex flex-col text-center pt-16">
                    <h2 className="text-xl">
                        BUSCA OFERTAS DE TOURS, Y MUCHO MÁS...
                    </h2>
                    <h1 className="text-8xl tracking-widest font-extrabold py-12">
                        ¿A DÓNDE <span className="text-[#F92942]">VAS?</span>
                    </h1>
                </div>
                <div className="p-10 rounded-full w-full input-bg">
                    <div className="rounded-full bg-white text-black py-4 px-8 w-full">
                        asdass
                    </div>
                </div>
            </div>
            <div className="bg-[#0E101F] flex flex-col gap-24 w-100 py-24 px-20 w-full">
                <div>
                    <h3 className="text-4xl">
                        <div>Ofertas especiales</div>
                        <div className="h-1 bg-[#F92942] pt-2 w-50"></div>
                    </h3>
                </div>
            </div>
        </main>
    )
}
