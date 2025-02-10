const FaleConosco = () => {
    return (
        <>
            <div className="padding-resp pt-650-resp" style={{ padding: '100px 100px 100px 100px' }}>
                <div className="d-flex d-sm-grid justify-content-between w-100">
                    <div className="card border-0 shadow-none w-50 w-100-resp border-end border-sm-0 mb-sm-5">
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid mb-3" src="/img/icones/Group-482128.png" />
                                <h1 className="fs-19px-resp text-center mt-3" style={{ fontSize: '30px' }}>Faça parte do mercado <br /> digital financeiro!</h1>
                                <p className="text-sm-center w-75 w-100 text-secondary my-4">Pellentesque urna commodo, elementum, est nullam.</p>
                                <button className="btn btn-primary p-3 px-5">Quero ser cliente</button>
                            </div>
                        </div>
                    </div>

                    <div className="border border-secondary opacity-25"></div>

                    <div className="card border-0 shadow-none w-50 w-100-resp border-start border-sm-0">
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid mb-3" src="/img/icones/Group-482131.png" />
                                <h1 className="fs-19px-resp text-center mt-3" style={{ fontSize: '30px' }}>Um time de suporte incrível <br /> para lhe atender</h1>
                                <p className="text-sm-center w-75 w-100 text-secondary my-4">Pellentesque urna commodo, elementum, est nullam.</p>
                                <button className="btn btn-outline-primary p-3 px-5">Fale conosco</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaleConosco;