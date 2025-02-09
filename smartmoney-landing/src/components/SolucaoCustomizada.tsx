import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const SolucaoCustomizada = () => {
    return (
        <div className="d-flex d-sm-grid justify-content-between justify-content-sm-center align-items-center gap-0 mt-5 w-100-resp padding-resp" style={{ padding: '30px 100px 30px 100px' }}>
            <div className='w-100-resp text-sm-center' style={{ width: '60%' }}>
                <h1 className="text-dark fs-32px-resp" style={{ fontSize: '40px' }}>Conheça nossas <br />solução customizadas</h1>
                <p className="fw-normal fs-19px fs-5 mb-5 w-100-resp" style={{ width: '65%' }}>Suscipit pellentesque praesent auctor molestie massa nunc vitae felis eget est ut gravida in maecenas. Tempus in in in congue proin.</p>
                <p className="fw-normal fs-5 fs-6-sm"><FontAwesomeIcon style={{ color: '#35d9a8' }} icon={faCircleCheck} /> Sagittis sed cursus sed malesuada ultrices</p>
                <p className="fw-normal fs-5 fs-6-sm"><FontAwesomeIcon style={{ color: '#35d9a8' }} icon={faCircleCheck} /> Lectus ac at massa ac tellus fringilla aenean</p>
                <p className="fw-normal fs-5 fs-6-sm mb-5"><FontAwesomeIcon style={{ color: '#35d9a8' }} icon={faCircleCheck} /> Cras faucibus tristique volutpat accumsan</p>
                <button className='btn btn-primary px-5 py-3 mb-3'>Quero ser cliente</button>
                <p className="fw-normal fs-5 mb-5"><FontAwesomeIcon className='text-primary' icon={faMobileScreen} /> Fale conosco</p>
            </div>
            <div className="position-relative w-75">
                <div className="position-absolute top-sm-0 start-100-resp end-0" style={{ top: '-270px' }}>
                    <img className="position-absolute img-frame-resp" src="/img/secao/Frame-151.png" alt="" style={{ left: '-229px', bottom: '41px' }} />
                    <img className="img-group-resp" src="/img/secao/Group-40017.png" alt="" />
                    <img className="position-absolute img-frame482140-resp" src="/img/secao/Frame-482140.svg" alt="" style={{ right: '30px', bottom: '34px' }} />
                </div>
            </div>
        </div>
    );
};

export default SolucaoCustomizada;