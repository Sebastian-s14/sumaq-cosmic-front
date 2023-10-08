import { Link } from '@nextui-org/link'
import NextLink from 'next/link'

export const Header = () => {
    return (
        <div className="flex gap-20 w-full py-6 bg-transparent">
            <div>
                <Link
                    href="/"
                    as={NextLink}
                    className="d-flex font-semibold flex-col text-xl"
                    color="foreground"
                >
                    <span>SUMAQ</span>
                    <span className="bg-gradient-to-r from-indigo-500">
                        COSMIC
                    </span>
                </Link>
            </div>
            <div className="flex gap-10">
                <Link
                    href="/about"
                    as={NextLink}
                    className="d-flex font-semibold"
                    color="foreground"
                >
                    Destinos espaciales
                </Link>
                <Link
                    href="/about"
                    as={NextLink}
                    className="d-flex font-semibold"
                    color="foreground"
                >
                    Acerca de nosotros
                </Link>
            </div>
        </div>
    )
}
