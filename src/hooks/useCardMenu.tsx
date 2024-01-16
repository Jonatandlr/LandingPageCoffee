export const useCardMenu = () => {
    const info = [
        {
            title: "Bebidas",
            description: "Disfruta de un delicioso café o chocolate caliente",
            image: "/bebidas.jpg",
            link: "/pdfs/bebidas.pdf",
            menu: {
                title: "Bebidas",
                secciones: {
                    cafe: {
                        'Café del dia': {
                            caliente: ['$35', '$40', '$45'],
                            frio: []
                        },
                        'Expresso': {
                            caliente: ['$40', '$45', '$50'],
                            frio: []
                        },
                        'Cappuccino': {
                            caliente: ['$40', '$45', '$50'],
                            frio: ['45', '50', '55']
                        },

                    },
                    sinCafe: {
                        'Chocolate caliente': {
                            caliente: ['$45', '$50', '$55'],
                            frio: ['$45', '$50', '$55']

                        },
                        'Té': {
                            caliente: ['$35', '$40', '$45'],
                            frio: []
                        },
                        'Frappe': {
                            caliente: [],
                            frio: ['$45', '$50', '$55']
                        },
                        'Smoothie': {
                            caliente: [],
                            frio: ['$45', '$50', '$55']
                        },
                        'Malteada': {
                            caliente: [],
                            frio: ['$45', '$50', '$55']
                        },

                    }
                }
            }


        },
        {
            title: "Especialidades",
            description: "Deleitate con nuestras especialidades",
            image: "/expecialidad.jpg",
            link: "/pdfs/especialidad.pdf",
            menu: {
                title: 'Especialidades',
                secciones: {
                    especiales: {
                        'Expreso tonic': {
                            price: '$70'
                        },
                        'Affogato Vainilla': {
                            price: '$60'
                        },
                        'Cold Brew': {
                            price: '$75'
                        },
                        'Shakerato': {
                            price: '$70'
                        },
                    },
                    extras: {
                        'Leche': {
                            price: '$10'
                        },
                        'Leche vegetal': {
                            price: '$12'
                        },
                        'Expresso': {
                            price: '$20'
                        },
                        'Sabor para tu latte': {
                            price: '$19'
                        },

                    }
                }
            }

        },
        {
            title: "Comida",
            description: "Disfruta de un delicioso postre o un sándwich",
            image: "/comida.jpg",
            link: "/pdfs/comida.pdf",
            menu: {
                title: 'Comida',
                secciones: {
                    panDulce: {
                        'Concha vainilla': {
                            price: '$30'
                        },
                        'Cuernito': {
                            price: '$30'
                        },
                        'Rol de canela': {
                            price: '$36'
                        },
                        'Oreja de azucar': {
                            price: '$30'
                        },
                        'Ladrillo': {
                            price: '$36'
                        },
                    },
                    panSalado: {
                        'un pan salado': {
                            price: '$55'
                        },
                        'otro pan salado': {
                            price: '$55'
                        },
                        'mas panes salados': {
                            price: '$65'
                        },
                        'no se que poner': {
                            price: '$35'
                        },

                    },
                    sandwiches: {
                        'un sandwich': {
                            price: '$55'
                        },
                        'otro sandwich': {
                            price: '$55'
                        },
                        'mas sandwiches': {
                            price: '$65'
                        },
                        'no se que poner': {
                            price: '$35'
                        },

                    },
                }
            }
        },

    ]
    return info
}