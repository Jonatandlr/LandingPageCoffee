import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";




const navLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Menu",
        link: "#Menu",
    },
    {
        name: "Nosotros",
        link: "#Nosotros",
    },
]


export default function NavBar() {
    return (
        <nav className="w-full absolute z-30 bg-white">
            <MaxWidthWrapper>
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <div className="bg-flex items-center justify-center w-10 h-10 rounded-ful">
                            <Image
                                src="/cafecacaologo.png"
                                alt="logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h1 className="ml-2 text-xl font-bold">CAFÉ CACAO</h1>
                    </div>

                    <div className="flex items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.link}
                                className={buttonVariants({
                                    variant: "link",
                                })}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link
                            href="#Contactanos"
                            className={buttonVariants({
                                variant: "default",
                                size: "lg",

                            })}
                        >
                        Contactanos
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
