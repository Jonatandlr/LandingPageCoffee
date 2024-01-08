import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function CarrouselNosotros() {
    return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} >
                            <div className="p-1">
                                <Card>
                                    <CardContent className=" hover:cursor-pointer relative flex aspect-square items-center justify-center p-6 overflow-hidden">
                                        <Image
                                            src={`/carousel/${index + 1}.jpg`}
                                            fill
                                            alt="Picture of the author"
                                            className="object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
