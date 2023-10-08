import Image from 'next/image'

export const CardOffer = ({
    image,
    alt,
    title,
}: {
    image: string
    alt: string
    title: string
}) => {
    return (
        <div className="w-full h-72 relative">
            <Image
                src={image}
                alt={alt}
                className="object-cover h-full"
                loading="lazy"
                fill
                sizes="25rem"
            />
            <div className="absolute flex w-full justify-center items-center top-0 h-full font-bold text-3xl">
                <span className="tracking-widest">{title}</span>
            </div>
        </div>
    )
}
