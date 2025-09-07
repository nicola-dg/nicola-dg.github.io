import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";

const WorksSection = () => {

    return (
        <section id="servizi" className="pb-42 scroll-mt-20">
            <div className="flex flex-col gap-4 items-center">

                <Title>I Nostri Servizi</Title>

                <Paragraph>
                    Una selezione dei progetti realizzati per abitazioni private e aziende.
                </Paragraph>

                <div className="relative flex flex-col items-center ">

                    {/* Galleria Immagini */}
                    <ImageGallery></ImageGallery>

                    {/* Immagine constructors */}
                    <div className="absolute bottom-0 left-0 translate-y-2/3 -translate-x-1/3 ">
                        <div className="ml-auto h-40 w-64 lg:h-50 lg:w-80">
                            <MyImage></MyImage>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WorksSection;


const ImageGallery = () => {

    const images = [
        "/images/ferro/persiana_napoletana.JPG",
        "/images/ferro/cancello.JPG",
        "/images/ferro/cancello_pedonale.JPG",
        "/images/ferro/porta_ferro.JPG",
        "/images/ferro/balaustra.JPG"
    ];

    return (
        <Carousel className="w-full max-w-xs md:max-w-md lg:max-w-full">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full lg:basis-1/3">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-2">
                            <Card className="aspect-square w-full overflow-hidden">
                                <CardContent className="p-0 h-full">
                                    <img
                                        src={image}
                                        alt={`Lavoro ${index + 1}`}
                                        className="w-full h-full object-cover"
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
    )
}

const MyImage = () => {
    return (
        <img
            src="/images/undraw_construction-workers.svg"
            alt="Immagine decorativa"
            className="w-full max-w-sm"
        />
    )
}