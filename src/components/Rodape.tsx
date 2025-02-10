import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const Rodape = () => {
    return (
        <>
            <footer className="d-grid align-items-start" style={{ padding: '0px', position: 'relative' }}>
                <Image
                    className="img-fluid position-absolute top-0 start-0 w-100 h-1250-resp"
                    src="/img/topo/Rectangle-4.png"
                    alt="Rectangle-4"
                    style={{ height: '610px', zIndex: '-11', objectFit: 'cover' }}
                    width={1920}
                    height={610}
                />
                <div className="position-relative">
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/Ellipse-1228.png"
                        alt="Ellipse-1228"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/lines.png"
                        alt="Lines"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/lines-2.png"
                        alt="Lines-2"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/mask.png"
                        alt="Mask"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/Rectangle.png"
                        alt="Rectangle"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                    <Image
                        className='img-fluid position-absolute top-0 start-0 w-100 opacity-25 h-1250-resp'
                        src="/img/rodape/Rectangle-7.png"
                        alt="Rectangle-7"
                        style={{ height: '610px', zIndex: '-10' }}
                        width={1920}
                        height={610}
                    />
                </div>

                <div className="padding-footer padding-footer-pc" style={{ padding: '170px 100px 0px 100px' }}>
                    <div className="d-flex d-sm-grid justify-content-between w-100 mb-5">
                        <div className="d-grid justify-content-start w-50 w-100-resp mb-sm-5">
                            <div className="w-100-resp text-sm-center" style={{ width: '650px' }}>
                                <FontAwesomeIcon className="text-white mb-4" icon={faEnvelope} size="3x" />
                                <h1 className="text-white text-sm-center fs-1 fs-33-resp mb-3" style={{ fontSize: '24px' }}>Fique por dentro das novidades</h1>
                                <p className="text-white fs-4 mb-4">Cadastre seu e-mail para receber conteúdo</p>
                                <input className="form-control p-3" type="email" placeholder="Insira seu melhor e-mail" />
                                <div className="position-relative">
                                    <div className="position-absolute position-initial-sm mt-sm-3" style={{ top: '-48px', right: '20px' }}>
                                        <button className="btn btn-primary btn-footer">Receber Novidades</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex d-sm-grid justify-content-sm-center justify-content-end w-50 w-100-resp">
                            <div className="d-flex gap-3 justify-content-sm-start justify-content-end w-100 d-none d-sm-grid mb-5">
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-grid gap-3 me-5">
                                        <a className="text-white text-decoration-none fs-5 fs-6-sm">Quero ser cliente</a>
                                        <a className="text-white text-decoration-none fs-5 fs-6-sm">Acessar conta</a>
                                        <a className="text-white text-decoration-none fs-5 fs-6-sm">Dúvidas</a>
                                    </div>
                                    <div className="d-grid gap-3">
                                        <a className="text-white text-decoration-none fs-5 fs-6-sm">Termos e condições</a>
                                        <a className="text-white text-decoration-none fs-5 fs-6-sm">Fale conosco</a>
                                    </div>
                                </div>
                            </div>

                            <div className="d-grid gap-3 justify-content-end w-100 d-sm-none">
                                <a className="text-white text-decoration-none fs-5 fs-6-sm">Quero ser cliente</a>
                                <a className="text-white text-decoration-none fs-5 fs-6-sm">Acessar conta</a>
                                <a className="text-white text-decoration-none fs-5 fs-6-sm">Dúvidas</a>
                                <a className="text-white text-decoration-none fs-5 fs-6-sm">Termos e condições</a>
                                <a className="text-white text-decoration-none fs-5 fs-6-sm">Fale conosco</a>
                            </div>

                            <a className="text-white text-center text-decoration-none fs-5 fs-6-sm d-none d-sm-block mb-sm-3">Acompanha nas redes</a>
                            <div className="d-grid d-sm-flex gap-3 justify-content-sm-center justify-content-end w-100-resp" style={{ width: '650px' }}>
                                <a className="text-white text-decoration-none fs-5 fs-6-sm d-block d-sm-none">Acompanha nas redes</a>
                                <div className="d-flex">
                                    <Image
                                        src="/img/rodape/Frame-37.png"
                                        className="img-fluid icone-rodape me-3"
                                        width={30}
                                        height={25}
                                        alt="Twitch"
                                    />
                                    <a className="text-white text-decoration-none fs-5 fs-6-sm d-block d-sm-none">Twitch</a>
                                </div>

                                <div className="d-flex">
                                    <Image
                                        src="/img/rodape/Frame-38.png"
                                        className="img-fluid icone-rodape me-3"
                                        width={30}
                                        height={25}
                                        alt="Linkedin"
                                    />
                                    <a className="text-white text-decoration-none fs-5 fs-6-sm d-block d-sm-none">Linkedin</a>
                                </div>

                                <div className="d-flex">
                                    <Image
                                        src="/img/rodape/instagram.png"
                                        className="img-fluid icone-insta-rodape mt-2 mx-2 me-3"
                                        width={30}
                                        height={25}
                                        alt="Instagram"
                                    />
                                    <a className="text-white text-decoration-none fs-5 fs-6-sm d-block d-sm-none">Instagram</a>
                                </div>

                                <div className="d-flex">
                                    <Image
                                        src="/img/rodape/Frame-40.png"
                                        className="img-fluid icone-face-rodape me-3"
                                        width={30}
                                        height={25}
                                        alt="Facebook"
                                    />
                                    <a className="text-white text-decoration-none fs-5 fs-6-sm d-block d-sm-none">Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-secondary my-5" style={{ width: '102%' }}></div>

                    <div className="d-sm-grid d-flex align-items-center text-sm-center justify-content-between mb-4 gap-sm-5 justify-content-sm-center">
                        <Image
                            src="/img/topo/logo-smartmoney.png"
                            className="img-fluid mx-sm-auto"
                            width={236}
                            height={37}
                            alt="Logo SmartMoney"
                        />

                        <p className="text-white fs-6 mb-0 d-none d-sm-block">© 2022 SmartBusiness. <br /> Todos os direitos reservados</p>

                        <p className="text-white fs-6 mb-0 d-block d-sm-none">© 2022 SmartBusiness. Todos os direitos reservados</p>

                        <div className="d-flex justify-content-sm-center align-items-center">
                            <Image
                                src="/img/icones/Group-39947.svg"
                                className="img-fluid"
                                width={20}
                                height={20}
                                alt="Idioma"
                            />
                            <p className="text-white fs-6 mx-3 mb-0">Português</p>
                            <Image
                                src="/img/icones/Vector-455.png"
                                className="img-fluid"
                                width={15}
                                height={10}
                                alt="Seta"
                            />
                        </div>

                        <p className="text-sm-center text-white fs-6 mb-0">Desenvolvido por Insany Design</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Rodape;
