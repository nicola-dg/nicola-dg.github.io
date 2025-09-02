


const WorkWithUsSection = () => {

    const paragrafi = [
        <>Sei appassionato di <strong>artigianato</strong>, infissi in ferro e alluminio o vuoi crescere in un ambiente professionale e dinamico?</>,

        <>Tecnall 2000 è sempre alla ricerca di persone motivate, competenti e con voglia di mettersi in gioco.</>,

        <>Offriamo <strong>opportunità di crescita</strong>, formazione continua e un ambiente dove la tua esperienza può fare la differenza.</>,

        <>Che tu sia un tecnico, un operatore di produzione o un professionista commerciale, il tuo talento può contribuire a costruire prodotti di qualità...</>,

        <>📩 <strong>Inviaci il tuo CV</strong> e un breve messaggio: raccontaci chi sei e <strong>perché vuoi entrare a far parte del nostro team</strong>. Siamo pronti ad accogliere nuove energie!</>,
    ];



    return (
        <section className="pb-22 flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-8">Lavora con Noi</h1>

            <div className="relative lg:flex lg:justify-center">
                <div className="lg:w-1/2">
                    {paragrafi.map((paragrafo, i) => (
                        <p key={i} className="mb-4 pr-20">
                            {paragrafo}
                        </p>
                    ))}
                </div>

                {/* Immagine cv */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 lg:static lg:-translate-y-0 lg:translate-x-0">
                    <div className="h-36 w-22 lg:h-105 lg:w-64">
                        <img
                            src="/images/undraw_cv.svg"
                            alt="Immagine decorativa"
                            className="w-full max-w-sm"
                        />

                    </div>
                </div>
            </div>




        </section>
    );
};

export default WorkWithUsSection;
