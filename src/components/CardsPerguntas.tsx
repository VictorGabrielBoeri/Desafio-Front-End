import Image from 'next/image';

const CardsPerguntas = () => {
    return (
        <>
            <div className="d-flex justify-content-start justify-content-sm-center align-items-center ms-sm-5">
                <Image 
                    src="/img/icones/Group-39938.svg" 
                    alt="Ícone de dúvidas" 
                    width={33} 
                    height={33} 
                />
                <div className="d-grid gap-1 ms-3">
                    <h1 className="fs-19px-resp text-sm-start mt-3 mb-0" style={{ fontSize: '24px' }}>Dúvidas?</h1>
                    <p className="fw-normal fs-6 mb-0">Envie uma mensagem para nosso time</p>
                </div>
            </div>

            <div className="d-flex justify-content-start justify-content-sm-center align-items-center ms-sm-5">
                <Image 
                    src="/img/icones/icon-1.svg" 
                    alt="Ícone de cadastro" 
                    width={33} 
                    height={33} 
                />
                <div className="d-grid gap-1 ms-3">
                    <h1 className="fs-19px-resp text-sm-start mt-3 mb-0" style={{ fontSize: '24px' }}>Faça parte</h1>
                    <p className="fw-normal fs-6 mb-0">Cadastre-se para transformar sua empresa</p>
                </div>
            </div>

            <div className="d-flex justify-content-start justify-content-sm-center align-items-center ms-sm-3">
                <Image 
                    src="/img/icones/Group-39946.svg" 
                    alt="Ícone de WhatsApp" 
                    width={33} 
                    height={33} 
                />
                <div className="d-grid gap-1 ms-3">
                    <h1 className="fs-19px-resp text-sm-start mt-3 mb-0" style={{ fontSize: '24px' }}>Chama no zap</h1>
                    <p className="fw-normal fs-6 mb-0">Fale com conosco comercial</p>
                </div>
            </div>
        </>
    );
};

export default CardsPerguntas;