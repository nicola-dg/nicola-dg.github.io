import { Newspaper, TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import Subtitle from "../ui/subtitle";
import Title from "../ui/title";

const HeroSection = () => {
    return (
        <section id="home" className="pt-24 pb-32 lg:pt-12 scroll-mt-40">
            <div className="flex relative flex-row justify-center gap-4 md:gap-8">


                <div className="flex flex-1 flex-col gap-4">

                    <div className="md:w-full flex flex-col gap-2">
                        <Title>Tecnal<span className="text-blue-900">2000</span></Title>

                        <Subtitle>
                            <div className="text-secondary whitespace-pre-line">
                                Infissi in ferro e in alluminio
                                su misura
                                per la tua casa e la tua
                                azienda
                            </div>
                        </Subtitle>
                    </div>

                    <Buttons />

                </div>

                <div className="w-32 mt-auto md:h-80 md:w-80 lg:h-100 lg:w-100 ">
                    <MyImage></MyImage>
                </div>



            </div>
        </section>
    );
};


const Buttons = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Button className="text-base md:text-lg lg:text-xl md:h-12 lg:h-16" asChild>
                <a href="#contatti">
                    <Newspaper className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                    <span className="hidden md:block">Richiedi un</span>
                    <span>Preventivo</span>
                </a>
            </Button>

            <Button variant="outline" className="text-base md:text-lg lg:text-xl md:h-12 lg:h-16" asChild>
                <a href="#contatti">
                    <div className="flex items-center gap-2">
                        <TriangleAlert className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                        <div className="flex gap-1.5">
                            <span className="hidden md:block">Chiama per un</span>
                            <span>Emergenza</span>
                        </div>
                    </div>
                </a>
            </Button>
        </div>
    )
}

const MyImage = () => {
    return (
        <img
            src="/images/undraw_login_weas.svg"
            alt="Immagine con infisso"
            className="w-full"
        />
    )
}


export default HeroSection;
