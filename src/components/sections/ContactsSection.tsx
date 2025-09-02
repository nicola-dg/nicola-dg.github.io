

const ContactsSection = () => {




    return (
        <section className="pb-22 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-8 lg:mb-16">
                Contatti
            </h1>

            <div className="flex flex-col">
                <div>
                    <p className="font-bold lg:text-xl">Hai un emergenza che richiede il nostro intervento?</p>
                    <p className="lg:text-lg">Chiamaci subito al <span className="font-semibold lg:text-lg">5556667777888</span></p>
                </div>

                {/* Immagine contatti */}
                <div className="ml-auto py-2 lg:py-0 lg:-translate-y-1/6">
                    <div className="h-36 w-64 lg:h-full lg:w-xl">

                        <img
                            src="/images/undraw_contact-us.svg"
                            alt="Immagine decorativa"
                            className="w-full"
                        />

                    </div>
                </div>

                <div className="lg:w-2/3">
                    <p className="font-bold lg:text-xl">Vuoi richiedere un preventivo?</p>
                    <p className="lg:text-lg">Puoi contattarci direttamente tramite email a <span className="font-semibold lg:text-lg">email.email@gmail.com </span>
                        oppure telefonicamente WhatsApp o telefonata al <span className="font-semibold lg:text-lg">333444555666.</span></p>
                </div>

            </div>


        </section>
    );
};





export default ContactsSection;

