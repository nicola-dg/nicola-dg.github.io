import { Newspaper, TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
    return (
        <section className="pb-48">
            <div className="flex  relative flex-row justify-center md:gap-8">
                <div className="flex flex-1 flex-col">
                    <div className="pb-4">
                        <Title />
                        <Subtitle />
                    </div>

                    <div className="w-1/2">
                        <Buttons />
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 md:-translate-y-0 md:-translate-x-0 md:static  md:flex md:justify-center">
                    <div className="h-32 w-32 md:h-80 md:w-[300px] lg:h-100 lg:w-100">
                        <MyImage></MyImage>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Buttons = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 lg:pt-8">
            <Button className="md:h-12 lg:text-lg lg:h-16">
                <Newspaper className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                <span className="hidden md:block">Richiedi un</span>
                <span>Preventivo</span>
            </Button>

            <Button variant="outline" className="md:h-12 lg:text-lg lg:h-16">
                <div className="flex items-center gap-2">
                    <TriangleAlert className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                    <div className="flex gap-1.5">
                        <span className="hidden md:block">Chiama per un</span>
                        <span>Emergenza</span>
                    </div>
                </div>
            </Button>
        </div>
    )
}

const MyImage = () => {
    return (
        <img
            src="/images/undraw_login_weas.svg"
            alt="Immagine con infisso"
            className="w-full max-w-sm"
        />
    )
}


const Subtitle = () => {
    return (
        <h2 className="text-3xl lg:text-4xl text-secondary">
            Infissi in ferro e in alluminio su misura
            per la tua casa e la tua azienda
        </h2>

    )

}

const Title = () => {
    return (
        <h1 className="text-5xl lg:text-9xl font-bold mb-4">
            Tecnal<span className="text-blue-900">2000</span>
        </h1>

    )

}




export default HeroSection;
