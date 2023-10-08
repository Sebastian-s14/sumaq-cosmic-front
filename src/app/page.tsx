import { Card, CardBody } from '@nextui-org/card'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

import { CardOffer, Header, SubTitle } from '@/components'
import { MailIcon } from '@/icons'

import './landing.css'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center lg:container w-full lg:mx-auto">
            <div className="bg-[url('/landing.gif')] px-16 bg-cover pb-72 w-full h-screen bg-center">
                <Header />
                <div className="h-full flex flex-col justify-center">
                    <div className="flex flex-col text-center">
                        <h2 className="text-xl">
                            BUSCA OFERTAS DE TOURS, Y MUCHO MÁS...
                        </h2>
                        <h1 className="text-8xl tracking-widest font-extrabold py-12">
                            ¿A DÓNDE{' '}
                            <span className="text-[#F92942]">VAS?</span>
                        </h1>
                    </div>
                    <div className="p-10 rounded-full w-full input-bg">
                        <div className="rounded-full bg-white text-black py-4 px-8 w-full">
                            asdass
                        </div>
                    </div>
                </div>
            </div>

            {/* Ofertas especiales */}
            <div className="bg-[#0E101F] flex flex-col gap-24 py-24 px-20 w-full h-full lg:h-[26rem]">
                <div className="flex justify-center">
                    <SubTitle text="Ofertas especiales" />
                </div>
                <div className="flex gap-12 pb-12 flex-wrap lg:flex-nowrap">
                    <CardOffer
                        image="/img/offers/jupiter.webp"
                        alt="jupiter"
                        title="JUPITER"
                    />
                    <CardOffer
                        image="/img/offers/moon.webp"
                        alt="moon"
                        title="MOON"
                    />
                    <CardOffer
                        image="/img/offers/marte.webp"
                        alt="marte"
                        title="MARTE"
                    />
                </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="bg-white h-full w-full px-20 py-48">
                <div className="flex justify-center pb-24">
                    <SubTitle text="Enlaces rápidos" theme="secondary" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="h-[37.5rem] w-full">
                        <CardBody>
                            <p>
                                Make beautiful websites regardless of your
                                design experience.
                            </p>
                        </CardBody>
                    </Card>
                    <div className="flex flex-col gap-6">
                        <Card className="h-[37.5rem] lg:h-full w-full ">
                            <CardBody>
                                <p>
                                    Make beautiful websites regardless of your
                                    design experience.
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="h-[37.5rem] lg:h-full w-full">
                            <CardBody>
                                <p>
                                    Make beautiful websites regardless of your
                                    design experience.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Descubre mucho más */}
            <div className="bg-white h-full w-full px-20 py-48">
                <div className="flex justify-center pb-24">
                    <SubTitle text="Descubre mucho más" theme="secondary" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <Card className="h-[50rem] w-full">
                        <CardBody>
                            <p>
                                Make beautiful websites regardless of your
                                design experience.
                            </p>
                        </CardBody>
                    </Card>
                    <div className="grid grid-rows-2 gap-2 col-span-2">
                        <div className="grid grid-cols-2 gap-2">
                            <Card>
                                <CardBody>
                                    <p>
                                        Make beautiful websites regardless of
                                        your design experience.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <p>
                                        Make beautiful websites regardless of
                                        your design experience.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Card>
                                <CardBody>
                                    <p>
                                        Make beautiful websites regardless of
                                        your design experience.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <p>
                                        Make beautiful websites regardless of
                                        your design experience.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <p>
                                        Make beautiful websites regardless of
                                        your design experience.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#0E101F] flex flex-col gap-14 py-20 px-20 w-full">
                <div className="flex justify-center">
                    <SubTitle text="Explora más allá del hueco" />
                </div>
                <div className="flex gap-3 lg:mx-36">
                    <Input
                        type="email"
                        // label="Email"
                        placeholder="Ingresa tu correo"
                        startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        size="lg"
                        classNames={{
                            inputWrapper:
                                'rounded-full px-8 !bg-white text-black',
                        }}

                        // classNames={{
                        //     input: ['text-black', 'text-2xl', 'h-16'],
                        //     inputWrapper: [
                        //         'bg-white',
                        //         'focus:bg-white',
                        //         'px-8',
                        //         'py-8',
                        //         'rounded-full',
                        //     ],
                        // }}
                    />
                    <div>
                        <Button className="bg-[#F92942] rounded-3xl h-full px-7">
                            ¡Suscríbete!
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
