import MaxWithWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownIcon, Car } from "lucide-react";
import Link from "next/link";
import GridCardMenu from "@/components/Menu/GridCardMenu";
import CarrouselNosotros from "@/components/CarrouselNosotros";
import FormContact from "@/components/FormContact";
export default function page() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.8)),url('/bg.jpg')" }}>
        <MaxWithWrapper className="mb-12  sm:mt-20 flex flex-col items-center justify-center text-center" >
          <h2 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white">
            Despierta tus Sentidos con <span className="text-[#976A4D] underline">Café Cacao</span>
          </h2>
          <div className="text-white text-center">
            <p className="mt-4 mb-8 mx-auto max-w-2xl">
              Sumérgete en una experiencia única donde el aroma del café se fusiona
              con la exquisitez del cacao. En nuestra cafetería,
              cada taza cuenta una historia, despertando tus sentidos
              y llevándote en un viaje de sabores inolvidables. ¡Descubre la magia en cada sorbo!
            </p>
            <Link
              className={buttonVariants({
                className: "hover:scale-105 transform transition-all duration-300 ease-in-out",
              })}
              href="#Menu" >
              Explora nuestro Menú <ArrowDownIcon className="inline-block" />
            </Link>
          </div>
        </MaxWithWrapper >
      </div>

      {/* Nuetsro Menu */}

      <MaxWithWrapper className="mb-10 md:mt-10   flex flex-col items-center justify-center text-center" >
        <div id="Menu" className="w-full  flex flex-col items-center justify-center  mb-10">
          <h2 className="max-w-4xl text-2xl font-normal md:text-3xl lg:text-4xl mb-12 flex justify-start">Nuestro Menu</h2>
          <GridCardMenu />
        </div>
      </MaxWithWrapper>


      {/* Nosotros */}
      <div id="Nosotros" className="flex flex-col items-center justify-center text-center">
        <MaxWithWrapper className="mb-12  md:mt-10   flex md:flex-row flex-col  items-center justify-around text-center" >
          <div>
            <h2 className="max-w-4xl text-2xl font-normal md:text-3xl lg:text-4xl mb-5 flex justify-start">Nosotros</h2>
            <p className="mt-4 mb-8 mx-auto xl:max-w-lg lg:max-w-xs md:max-w-72 max-w-lg text-start">
              Somos una cafetería que nace en el 2021, con el objetivo de brindar una experiencia única a nuestros clientes. La calidad de nuestros productos y la atención personalizada, son nuestra prioridad. Nos caracterizamos por ofrecer un ambiente acogedor, donde nuestros clientes puedan disfrutar de un buen café y un buen servicio.
            </p>
          </div>

          <div className="z-10">
            <CarrouselNosotros />
          </div>
        </MaxWithWrapper>
      </div>

      {/* Contactanos */}


      <div id="Contactanos" className="w-full mb-20 mt-16">
        <MaxWithWrapper className="mb-12  md:mt-10   flex md:flex-row flex-col  items-center justify-around text-center" >
          <FormContact />
        </MaxWithWrapper>
      </div>
    </div>
  )
}
