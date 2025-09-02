

const HistorySection = () => {
    return (
        <section className="relative pb-22 ">
            <div className="flex flex-col items-center">

                <h1 className="text-6xl font-bold mb-4">
                    La Nostra Storia
                </h1>

                <div id="body" className="flex flex-col">


                    {/*Primo paragrafo */}
                    <div className="flex flex-col md:flex-row md:items-center ">
                        <p className="md:order-2 md:w-1/2">
                            Da oltre 25 anni, Tecnal 2000 è punto di riferimento a Carinaro, Gricignano e dintorni per infissi in ferro e alluminio di qualità.
                            <br></br><br></br>
                            La nostra esperienza ci permette di unire tradizione artigianale e tecnologie moderne, offrendo soluzioni su misura per ogni esigenza.
                        </p>

                        {/* Immagine qa_engineer */}
                        <div className="md:order-1 md:w-1/2 py-2">
                            <div className="h-48 w-64 lg:h-90 lg:w-120 mx-auto lg:mx-0">

                                <img
                                    src="/images/undraw_qa-engineers.svg"
                                    alt="Immagine decorativa"
                                    className="w-full"
                                />

                            </div>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row md:items-center">
                        {/*Secondo paragrafo */}
                        <p className="md:w-1/2">
                            Affidarsi a Tecnal significa scegliere affidabilità, competenza e un servizio attento ad ogni fase del progetto: dalla consulenza iniziale all’installazione finale.
                            <br></br><br></br>
                            Siamo orgogliosi di crescere insieme al nostro territorio, contribuendo a rendere case e spazi più sicuri, eleganti e funzionali.
                        </p>


                        {/* Immagine constructors */}
                        <div className="md:w-1/2 py-2">
                            <div className="mx-auto lg:mx-0 h-42 w-64 lg:h-90 lg:w-140">

                                <img
                                    src="/images/undraw_constructors.svg"
                                    alt="Immagine decorativa"
                                    className="w-full"
                                />

                            </div>
                        </div>
                    </div>




                </div>



            </div>
        </section>
    );
};





export default HistorySection;
