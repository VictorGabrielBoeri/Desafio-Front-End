import CarrouselNoticias from "./CarrouselNoticias";

const AreaNoticias = () => {
    return (
        <div className="padding-resp" style={{ background: '#F2F5FC', padding: '70px 100px 100px 100px' }}>
            <p className="text-primary fw-medium d-none d-lg-block">Nosso blog</p>
            <h1 className="fs-32px-resp text-sm-center mt-3 mb-0" style={{ fontSize: '40px' }}>Notícias do mundo da <br />tecnologia</h1>
            <CarrouselNoticias />
        </div>
    );
};

export default AreaNoticias;