


const PromozioniSection = () => {

    const paragrafi = [
        <>Vuoi essere sempre aggiornato su offerte e promozioni?</>,
        <>Lasciasci la tua <strong>e-mail o il tuo numero di telefono</strong> e ti contatteremo per informarti sulle ultime novità</>,
    ];



    return (
        <section className="pb-22 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-8">Promozioni</h1>

            <div className="relative lg:flex lg:justify-center py-4">

                <div className="lg:w-1/2 lg:order-2">
                    {paragrafi.map((paragrafo, i) => (
                        <p key={i} className="mb-4 pl-22">
                            {paragrafo}
                        </p>
                    ))}
                </div>

                {/* Immagine cv */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 lg:static lg:-translate-x-0 lg:-translate-y-0 lg:order-1">
                        <div className="h-28 w-36 lg:h-90 lg:w-120">
                            <img
                                src="/images/undraw_wallet.svg"
                                alt="Immagine decorativa"
                                className="w-full"
                            />

                        </div>
                    </div>

            </div>



        </section>
    );
};

export default PromozioniSection;
