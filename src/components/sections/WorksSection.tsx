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
        <section className="pb-42">
            <div className="flex flex-col gap-4 items-center">

                <Title>I Nostri Lavori</Title>


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
        <Carousel className="w-full max-w-xs md:max-w-full">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={image} alt="alt" className="w-full" />
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