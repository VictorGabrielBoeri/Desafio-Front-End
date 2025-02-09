    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

    const RodapeNoticias = () => {
        return (
            <>
                <footer className="d-grid align-items-start p-sm-3 px-sm-4 padding-resp" style={{ padding: '170px 100px 0px 100px', position: 'relative' }}>
                    <img className="img-fluid position-absolute top-0 start-0 w-100" src="/img/topo/Rectangle-4.png" alt="" style={{ height: '660px', zIndex: '-1', objectFit: 'cover' }} />
                    <div className="d-flex justify-content-between w-100 mb-5">
                        <div className="d-grid justify-content-start w-50">
                            <div style={{ width: '650px' }}>
                                <FontAwesomeIcon className="text-white mb-4" icon={faEnvelope} size="3x" />
                                <h1 className="text-white fs-1 mb-3" style={{ fontSize: '24px' }}>Fique por dentro das novidades</h1>
                                <p className="text-white fs-4 mb-4">Cadastre seu e-mail para receber conteúdo</p>
                                <input className="form-control p-3" type="email" placeholder="Insira seu melhor e-mail" />
                                <div className="position-relative">
                                    <div className="position-absolute" style={{ top: '-48px', right: '20px' }}>
                                        <button className="btn btn-primary">Receber Novidades</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end w-50">
                            <div className="d-grid gap-3 justify-content-end w-100">
                                <a className="text-white text-decoration-none fs-5">Quero ser cliente</a>
                                <a className="text-white text-decoration-none fs-5">Acessar conta</a>
                                <a className="text-white text-decoration-none fs-5">Dúvidas</a>
                                <a className="text-white text-decoration-none fs-5">Termos e condições</a>
                                <a className="text-white text-decoration-none fs-5">Fale conosco</a>
                            </div>

                            <div className="d-grid gap-3 justify-content-end" style={{ width: '650px' }}>
                                <a className="text-white text-decoration-none fs-5">Acompanha nas redes</a>
                                <div className="d-flex">
                                    <img src="/img/icones/Frame-196.png" className="img-fluid" />
                                    <a className="text-white text-decoration-none fs-5">Twitch</a>
                                </div>

                                <div className="d-flex">
                                    <img src="/img/icones/Frame-197.png" className="img-fluid" />
                                    <a className="text-white text-decoration-none fs-5">Linkedin</a>
                                </div>

                                <div className="d-flex">
                                    <img src="/img/icones/Frame-198.png" className="img-fluid" />
                                    <a className="text-white text-decoration-none fs-5">Instagram</a>
                                </div>
                                    
                                <div className="d-flex">
                                    <img src="/img/icones/Frame-199.png" className="img-fluid" />
                                    <a className="text-white text-decoration-none fs-5">Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-secondary my-5" style={{ width: '102%' }}></div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <img src="/img/topo/logo-smartmoney.png" className="img-fluid" width={236} height={37} />
                        
                         <p className="text-white fs-6 mb-0">© 2022 SmartBusiness. Todos os direitos reservados</p>

                         <div className="d-flex align-items-center">
                            <img src="/img/icones/Group-39947.svg" className="img-fluid" />
                            <p className="text-white fs-6 mx-3 mb-0">Português</p>
                            <img src="/img/icones/Vector-455.png" className="img-fluid" width={15} style={{ height: '10px' }}/>
                        </div>

                        <p className="text-white fs-6 mb-0">Desenvolvido por Insany Design</p>
                    </div>
                </footer>
            </>
        );
    };

    export default RodapeNoticias;
