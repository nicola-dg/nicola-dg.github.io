import Paragraph from "../ui/paragraph";
import Subtitle from "../ui/subtitle";
import Title from "../ui/title";


const ContactsSection = () => {

    const contactData = {
        email: "tecnal2000.official@gmail.com",
        cel: "3394662281"
    }




    return (
        <section id="contatti" className="pb-22 flex flex-col items-center gap-4 scroll-mt-20">

            <Title>Contatti</Title>

            <div className="flex flex-col">
                <div>
                    <Subtitle><p className="font-bold">Hai un emergenza che richiede il nostro intervento oppure vuoi richiedere un preventivo?</p></Subtitle>
                    <Paragraph>Puoi contattarci direttamente tramite email a
                        <a href="mailto:tecnal2000.official@gmail.com?subject=Richiesta Preventivo o Emergenza" className="inline-block px-1"><span className="font-semibold text-lg md:text-xl lg:text-2xl text-blue-800 hover:underline"> {contactData.email} </span></a>

                        oppure telefonicamente WhatsApp o telefonata al
                        <a href="tel:+393394662281" className="inline-block px-1"><span className="font-semibold text-lg md:text-xl lg:text-2xl text-blue-800 hover:underline"> {contactData.cel} </span></a>
                    </Paragraph>
                </div>

                {/* Immagine contatti */}
                <div className="mx-auto py-2">
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

