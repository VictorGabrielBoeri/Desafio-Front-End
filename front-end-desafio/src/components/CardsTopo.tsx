import TextoTopo from "../components/TextoTopo";

const CardsTopo = () => {
    return (
        <div className="d-grid align-items-start gap-0 h-75 w-100-resp">
            <TextoTopo />

            <div className='mb-5'>
                <div className="d-flex d-sm-grid justify-content-sm-center justify-content-start gap-sm-5">
                    <div className="d-grid justify-content-start justify-content-sm-center">
                        <span className="text-white text-sm-center fw-bold fs-1">120</span>
                        <span className="text-white text-sm-center fs-6">Projetos realizados em 2021</span>
                    </div>
                    <div className="d-grid justify-content-start justify-content-sm-center mx-5">
                        <span className="text-white text-sm-center fw-bold fs-1">12</span>
                        <span className="text-white text-sm-center fs-6">Escritórios no Brasil</span>
                    </div>
                    <div className="d-grid justify-content-start justify-content-sm-center">
                        <span className="text-white text-sm-center fw-bold fs-1">15mi</span>
                        <span className="text-white text-sm-center fs-6">Faturamento 2021</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsTopo;