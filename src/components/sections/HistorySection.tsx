
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";


const HistorySection = () => {
    return (
        <section className="pb-32">
            <div className="flex flex-col items-center gap-4">

                <Title>La Nostra Storia</Title>

                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-4">

                        <div className="md:order-2">
                            <Paragraph>
                                Da oltre 25 anni, Tecnal 2000 è punto di riferimento a Carinaro, Gricignano e dintorni per infissi in ferro e alluminio di qualità.
                                <br></br><br></br>
                                La nostra esperienza ci permette di unire tradizione artigianale e tecnologie moderne, offrendo soluzioni su misura per ogni esigenza.
                            </Paragraph>
                        </div>

                        {/* Immagine qa_engineer */}
                        <div className="md:order-1">
                            <div className="h-48 w-64 lg:h-90 lg:w-120 mx-auto lg:mx-0">
                                <EngineersImage></EngineersImage>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        {/*Secondo paragrafo */}
                        <Paragraph>
                            Affidarsi a Tecnal significa scegliere affidabilità, competenza e un servizio attento ad ogni fase del progetto: dalla consulenza iniziale all’installazione finale.
                            <br></br><br></br>
                            Siamo orgogliosi di crescere insieme al nostro territorio, contribuendo a rendere case e spazi più sicuri, eleganti e funzionali.
                        </Paragraph>
                        {/* Immagine constructors */}
                        <div className="md:w-1/2 py-2">
                            <div className="mx-auto lg:mx-0 h-42 w-64 lg:h-90 lg:w-140">
                                <ConstructorsImage></ConstructorsImage>
                            </div>
                        </div>
                    </div>




                </div>



            </div>
        </section>
    );
};



const EngineersImage = () => {
    return (
        <img
            src="/images/undraw_qa-engineers.svg"
            alt="Immagine decorativa"
            className="w-full"
        />
    )

}


const ConstructorsImage = () => {
    return (
        <img
            src="/images/undraw_constructors.svg"
            alt="Immagine decorativa"
            className="w-full"
        />
    )

}








export default HistorySection;
