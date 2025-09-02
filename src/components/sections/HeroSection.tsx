import { Newspaper, TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
    return (
        <section className="pb-36 relative">
            <div className="flex flex-col md:flex-row">

                {/* Testo */}
                <div className="flex-1">
                    <div>
                        <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                            Tecnal<span className="text-blue-900">2000</span>
                        </h1>
                        <h2 className="text-3xl lg:text-4xl text-secondary mb-6 lg:w-2/3">
                            Infissi in ferro e in alluminio su misura
                            per la tua casa e la tua azienda
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 w-1/2 lg:pt-8">

                        <Button className="lg:text-2xl lg:h-16">
                            <Newspaper className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                            <span className="hidden lg:block">Richiedi un</span>
                            <span>Preventivo</span>
                        </Button>

                        <Button variant="outline" className="lg:text-2xl lg:h-16 ring">
                            <div className="lg:pl-10 flex items-center gap-2">
                                <TriangleAlert className="md:!w-6 md:!h-6 lg:!w-10 lg:!h-10" />
                                <div className="flex gap-1.5">
                                    <span className="hidden lg:block">Chiama per un</span>
                                    <span>Emergenza</span>
                                </div>
                            </div>
                        </Button>
                    </div>


                </div>

                {/* Immagine / Placeholder */}
                <div className="absolute right-0 top-1/2 sm:-translate-x-1/3 md:-translate-x-1/4 lg:-translate-x-0 -translate-y-1/4 lg:-translate-y-1/2">
                    <div className="h-32 w-32 md:h-64 md:w-64 lg:h-100 lg:w-100">

                        <img
                            src="/images/undraw_login_weas.svg"
                            alt="Immagine con infisso"
                            className="w-full max-w-sm"
                        />

                    </div>
                </div>


            </div>
        </section>
    );
};





export default HeroSection;
