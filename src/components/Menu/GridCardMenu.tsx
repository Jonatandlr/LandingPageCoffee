
import { useCardMenu } from "@/hooks/useCardMenu"
import CardMenu from "./CardMenu"

export default function GridCardMenu() {
    const cartas = useCardMenu()

    return (
        <div className="grid  md:grid-cols-3 md:gap-3 grid-cols-1 gap-2 w-full">
            {cartas.map((carta, index) => (
                
                    <CardMenu
                        key={index}
                        title={carta.title}
                        description={carta.description}
                        image={carta.image}
                        link={carta.link}

                    />
                
            ))}

        </div>
    )
}
