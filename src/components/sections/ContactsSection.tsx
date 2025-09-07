import Paragraph from "../ui/paragraph";
import Subtitle from "../ui/subtitle";
import Title from "../ui/title";


const ContactsSection = () => {




    return (
        <section id="contatti" className="pb-22 flex flex-col items-center gap-4 scroll-mt-20">

            <Title>Contatti</Title>

            <div className="flex flex-col">
                <div>
                    <Subtitle><p className="font-bold">Hai un emergenza che richiede il nostro intervento oppure vuoi richiedere un preventivo?</p></Subtitle>
                    <Paragraph>Puoi contattarci direttamente tramite email a <span className="font-semibold text-lg md:text-xl lg:text-2xl">email.email@gmail.com </span>
                        oppure telefonicamente WhatsApp o telefonata al <span className="font-semibold text-lg md:text-xl lg:text-2xl">333444555666.</span></Paragraph>
                </div>

                {/* Immagine contatti */}
                <div className="mx-auto py-2 lg:py-0 lg:-translate-y-1/6">
                    <div className="h-36 w-64 lg:h-full lg:w-xl">

                        <img
                            src="/images/undraw_contact-us.svg"
                            alt="Immagine decorativa"
                            className="w-full"
                        />

                    </div>
                </div>

            </div>


        </section>
    );
};





export default ContactsSection;

