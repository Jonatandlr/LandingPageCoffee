
import { useCardMenu } from "@/hooks/useCardMenu"
interface ModalMenuProps {
    state: React.Dispatch<React.SetStateAction<boolean>>
    menu: string
}

export default function ModalMenu({ state, menu }: ModalMenuProps) {
    const cartas = useCardMenu()
    return (
        //Modal Menu
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40">
            <div
                onClick={() => state(false)}
                className="fixed w-full h-full bg-black opacity-50 "></div>
            {cartas.map(carta => carta.title === menu ? (
                <div key={carta.title} className="bg-white p-4 shadow-md rounded-md z-50 flex flex-col text-left w-1/2">

                    <h2 className="text-xl font-bold mb-4 text-[#976A4D] underline">{carta.title}</h2>
                    <div>
                        <div>
                            {/* info */}

                        
                        </div>

                        <div>
                            {/* bebidas */}
                        </div>
                    </div>



                </div>
            ) : null)}
        </div>

    )
}

// <h2 className="text-xl font-bold mb-4"></h2>
// <p>Modal Content Goes Here</p>
// <button
//     className="mt-4 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
// // Aquí puedes manejar la visibilidad del modal
// >
//     Close Modal
// </button>