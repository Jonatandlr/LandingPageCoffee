
import Image from 'next/image'
import Link from 'next/link'

interface CardMenuProps {
    title: string
    description: string
    image: string
    link: string
}
export default function CardMenu({ title, description, image,link }: CardMenuProps) {

    return (
        <div className=" lg:w-[300px] md:w-full h-[300px] flex text-center border-2 rounded-[20px] overflow-hidden relative group">
            <Link 
                href={link}
                passHref
                target='_blank'
            >
                <Image
                    src={image}
                    fill
                    alt="menu1"
                    className='object-cover group-hover:scale-105 transform transition-all duration-300 ease-in-out'
                    sizes='(max-width: 640px) 100vw, 640px'
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                    <h3 className="lg:text-3xl text-2xl font-bold">{title}</h3>
                    <p className="lg:text-xl text-lg lg:max-w-lg max-w-52">{description}</p>
                </div>
            </Link>

        </div>
    )
}
