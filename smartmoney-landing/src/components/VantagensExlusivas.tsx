const VantagensExlusivas = () => {
    return (
        <>
            <div className="d-grid align-items-start" style={{ padding: '0px !important' }}>
                <img className='img-fluid position-absolute opacity-25 w-100 h-1400-resp' src="/img/secao/Ellipse-133.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid position-absolute opacity-25 w-100 h-1400-resp' src="/img/secao/Ellipse-1228.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid position-absolute opacity-50 w-100 h-1400-resp' src="/img/secao/Mask-group-bg.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid position-absolute opacity-75 w-100 h-1400-resp' src="/img/secao/mask-bg.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid position-absolute opacity-25 w-100 h-1400-resp' src="/img/secao/Rectangle-7.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid opacity-25 position-absolute w-100 h-1400-resp' src="/img/secao/Rectangle-8.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid opacity-25 position-absolute w-100 h-1400-resp' src="/img/secao/Rectangle-9.png" alt="" style={{ height: '1000px', zIndex: '-11' }} />
                <img className='img-fluid opacity-25 position-absolute w-100 h-1400-resp' src="/img/secao/Rectangle-109.png" alt="" style={{ height: '1000px', zIndex: '-9' }} />
                <img className='img-fluid position-absolute w-100 h-1400-resp' src="/img/secao/Rectangle-105.png" alt="" style={{ height: '1000px', zIndex: '-11' }} />
                {/* <img className='img-fluid position-absolute w-100 h-1400-resp' src="/img/secao/background-lines-2.png" alt="" style={{ height: '1000px', zIndex: '-10' }} /> */}
                <img className='img-fluid position-absolute w-100 h-1400-resp' src="/img/secao/background-lines.png" alt="" style={{ height: '1000px', zIndex: '-10' }} />

                <div className="padding-resp" style={{ padding: '100px 100px 100px 100px' }}>
                    <div className="d-flex d-sm-grid justify-content-between justify-content-sm-center align-items-center mb-5">
                        <h1 className="fs-24px-resp text-white text-sm-center mt-3 mb-5 mb-sm-0" style={{ fontSize: '40px' }}>03 vantagens exclusivas <br />da SmartMoney</h1>

                        <div className="d-flex justify-content-end position-relative-sm align-items-end mt-3">
                            <button className="btn btn-primary btn-resp-quero-1 py-3 px-5">Quero ser cliente</button>
                        </div>
                    </div>

                    <div className="position-relative">
                        <img className='img-fluid img-ADOBESTOCK-1-resp position-absolute top-0 rounded-2 img-ADOBESTOCK-resp-pc' src="/img/secao/ADOBESTOCK_341268584-1.png" width={382} style={{ height: '480px', zIndex: '10', left: '740px'}} />
                        <img className='img-fluid img-Mask-group-database-resp position-absolute img-Mask-group-database-resp-pc' src="/img/secao/Mask-group-database.png" width={381}  style={{ height: '480px', zIndex: '10', top: '140px', left: '1165px' }} />
                        <img className='img-fluid img-vector-1270-resp position-absolute img-vector-1270-resp-pc' src="/img/secao/Vector-1270.png" width={149} style={{ height: '55px', zIndex: '10', left: '905px', top: '520px' }}/>
                        <img className='img-fluid img-vector-1271-resp position-absolute img-vector-1271-resp-pc' src="/img/secao/Vector-1271.png" width={149} style={{ height: '55px', zIndex: '10', left: '1210px', top: '40px' }} />
                        <img className='img-fluid img-tag-resp position-absolute img-tag-resp-pc' src="/img/secao/tag.png" width={260} style={{ height: '38px', zIndex: '10', left: '678px', top: '400px' }} />
                    </div>

                    <div className="d-grid gap-2 w-50">
                        <div className="card w-325-resp" style={{ width: '70%' }}>
                            <div className="card-body p-4 py-5">
                                <h1 className="fs-24px-resp text-sm-start mb-3" style={{ fontSize: '24px' }}>Tecnologia de ponta</h1>
                                <p className="text-sm-start w-75 w-100">Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit</p>
                                <div className="progress" style={{ height: '7px' }}>
                                    <div className="progress-bar" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-100-resp" style={{ width: '57%' }}>
                            <div className="p-4 py-5 p-sm-0 pt-sm-4">
                                <h1 className="fs-24px-resp text-sm-start mb-3" style={{ fontSize: '24px', color: '#A3ACB8' }}>Entrega eficiente</h1>
                                <p className="text-sm-start  fs-19px-resp w-75 w-100" style={{ color: '#A3ACB8' }}>Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.</p>
                            </div>
                        </div>

                        <div className="w-100-resp" style={{ width: '57%' }}>
                            <div className="p-4 py-5 p-sm-0 pt-sm-4">
                                <h1 className="fs-24px-resp text-sm-start mb-3" style={{ fontSize: '24px', color: '#A3ACB8' }}>Suporte especializado</h1>
                                <p className="text-sm-start  fs-19px-resp w-75 w-100" style={{ color: '#A3ACB8' }}>In massa, erat felis massa tincidunt. Aliquam, iaculis rutrum in mauris, integer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VantagensExlusivas;