import CardsPerguntas from "./CardsPerguntas";
import ListaPerguntas from "./ListaPerguntas";

const PerguntasFrequentes = () => {
    return (
        <>
            <div className="py-5 d-block d-md-none" style={{ background: '#F2F5FC' }}></div>
            <div className="padding-resp-perguntas bg-white-resp" style={{ background: '#F2F5FC', padding: '70px 100px 70px 100px'}}>
                <div className="d-flex d-sm-grid justify-content-between">
                    <div className="w-100-resp" style={{ width: '28%' }}>
                        <div className="mb-5">
                            <p className="fw-medium text-sm-center fs-6 mb-0">Tire suas dúvidas</p>
                            <h1 className="fs-24px-resp text-sm-center mt-3 mb-0" style={{ fontSize: '40px' }}>Perguntas mais frequentes</h1>
                            <p className="text-sm-center w-75 w-100 text-secondary fs-4 fs-6-sm mt-4 mb-5">Separamos algumas perguntas e respostas que podem te ajudar na sua decisão.</p>
                        </div>

                        <div className="d-grid justify-content-sm-center gap-4 mb-sm-5">
                            <CardsPerguntas />
                        </div>
                    </div>

                    <ListaPerguntas />
                </div>
            </div>
            <div className="py-5 d-block d-md-none" style={{ background: '#F2F5FC' }}></div>
        </>
    );
};

export default PerguntasFrequentes;