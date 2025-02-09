const CardsInformativos = () => {
    return (
        <div className="d-flex d-sm-grid justify-content-between justify-content-sm-center align-items-start gap-5 mt-200 mt-380-resp mb-70 padding-resp" style={{ padding: '30px 100px 30px 100px' }}>
            <div className='w-25 w-100-resp text-sm-center'>
                <span className="fundo-icon rounded-3 py-3 pt-4 px-4">
                    <img src="/img/icones/physcis.svg" alt="" />
                </span>
                <h1 className="fs-19px-resp text-sm-center mt-4" style={{ fontSize: '24px' }}>Fim da complexidade</h1>
                <p className="text-sm-center w-75 w-100-resp">Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris.</p>
            </div>

            <div className='w-25 w-100-resp text-sm-center'>
                <span className="fundo-icon rounded-3 py-3 pt-4 px-4">
                    <img src="/img/icones/wireless charging.svg" alt="" />
                </span>
                <h1 className="fs-19px-resp text-sm-center mt-4" style={{ fontSize: '24px' }}>Sem burocracia</h1>
                <p className="text-sm-center w-75 w-100-resp">Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra.</p>
            </div>

            <div className='w-25 w-100-resp text-sm-center'>
                <span className="fundo-icon rounded-3 py-3 pt-4 px-4">
                    <img src="/img/icones/interactive.svg" alt="" />
                </span>
                <h1 className="fs-19px-resp text-sm-center mt-4" style={{ fontSize: '24px' }}>Tudo digital </h1>
                <p className="text-sm-center w-75 w-100-resp">Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris.</p>
            </div>

            <div className='w-25 w-100-resp text-sm-center'>
                <span className="fundo-icon rounded-3 py-3 pt-4 px-4">
                    <img src="/img/icones/chart.svg" alt="" />
                </span>
                <h1 className="fs-19px-resp text-sm-center mt-4" style={{ fontSize: '24px' }}>Evolução constante</h1>
                <p className="text-sm-center w-75 w-100-resp">Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula.</p>
            </div>
        </div>
    );
};

export default CardsInformativos;