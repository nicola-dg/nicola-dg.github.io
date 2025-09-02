import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const WorksSection = () => {

    const images = [
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg",
        "/images/undraw_qa-engineers.svg"
    ];



    return (
        <section className="pb-42">
            <div className="flex flex-col gap-4 items-center">

                <h1 className="text-6xl font-bold mb-4">
                    I Nostri Lavori
                </h1>

                <div className="relative ring">

                    {/* Galleria Immagini */}
                    <div className="w-xs md:w-full">
                        <Carousel>
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index} className="basis-full lg:basis-1/3">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex items-center justify-center p-6">
                                                    <img src={image} alt="alt" />
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



                    {/* Immagine constructors */}
                    <div className="absolute bottom-0 left-0 translate-y-2/3 -translate-x-1/3 ">
                        <div className="ml-auto h-40 w-64 lg:h-50 lg:w-80">

                            <img
                                src="/images/undraw_construction-workers.svg"
                                alt="Immagine decorativa"
                                className="w-full max-w-sm"
                            />

                        </div>
                    </div>




                </div>



            </div>
        </section>
    );
};





export default WorksSection;

