import Paragraph from "../ui/paragraph";
import Title from "../ui/title";



const WorkWithUsSection = () => {

    const paragrafi = [
        <>Sei appassionato di <strong>artigianato</strong>, infissi in ferro e alluminio o vuoi crescere in un ambiente professionale e dinamico?</>,

        <>Tecnall 2000 è sempre alla ricerca di persone motivate, competenti e con voglia di mettersi in gioco.</>,

        <>Offriamo <strong>opportunità di crescita</strong>, formazione continua e un ambiente dove la tua esperienza può fare la differenza.</>,

        <>Che tu sia un tecnico, un operatore di produzione o un professionista commerciale, il tuo talento può contribuire a costruire prodotti di qualità...</>,

        <>📩 <strong>Inviaci il tuo CV</strong> e un breve messaggio: raccontaci chi sei e <strong>perché vuoi entrare a far parte del nostro team</strong>. Siamo pronti ad accogliere nuove energie!</>,
    ];



    return (
        <section id="lavora-con-noi" className=" flex flex-col items-center gap-4 scroll-mt-20">
            <Title>Lavora con Noi</Title>

            <div className="relative flex">
                <div>
                    {paragrafi.map((paragrafo, i) => (
                        <div className="mb-4 pr-20" key={i}>
                            <Paragraph>
                                {paragrafo}
                            </Paragraph>
                        </div>
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
