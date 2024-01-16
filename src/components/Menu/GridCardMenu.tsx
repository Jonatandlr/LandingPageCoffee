'use client'
import { useCardMenu } from "@/hooks/useCardMenu"
import CardMenu from "./CardMenu"
import { useState } from "react"
import ModalMenu from "./ModalMenu"


export default function GridCardMenu() {
    const cartas = useCardMenu()
    const [visible, setVisible] = useState(false)
    const [menu, setMenu] = useState('')

    const handleVisible = (info:string) => {
        setVisible(true)
        cartas.map(carta=>carta.title===info?setMenu(carta.title):null)
        // console.log(typeof(menu))
    }

    return (
        <div className="grid  md:grid-cols-3 md:gap-3 grid-cols-1 gap-2 w-full">
            {cartas.map((carta, index) => (

                <CardMenu
                    key={index}
                    title={carta.title}
                    description={carta.description}
                    image={carta.image}
                    visibleState={handleVisible}
                />

            ))}
            <div>
                {visible?
                <ModalMenu state={setVisible} menu={menu} />
                :null}
            </div>

        </div>
    )
}
