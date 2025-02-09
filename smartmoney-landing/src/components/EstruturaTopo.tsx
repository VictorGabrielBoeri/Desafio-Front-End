import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ConteudoTopo from '../components/ConteudoTopo';

const EstruturaTopo = () => {
  const [navAberta, setNavAberta] = useState(false);
  const navRef = useRef(null);

  const alternarNav = () => {
    setNavAberta(!navAberta);
  };

  return (
    <>
      <header className="d-grid align-items-start p-sm-3 px-sm-4 padding-resp" style={{ padding: '30px 100px 30px 100px' }}>
        <img className='img-fluid position-absolute top-0 start-0 w-100 h-154vh-resp' src="/img/topo/Rectangle-4.png" alt="" style={{ height: '700px', zIndex: '-11' }} />
        <img className='img-fluid opacity-50 position-absolute top-0 start-0 w-100 h-154vh-resp' src="/img/topo/lines.png" alt="" style={{ height: '700px', zIndex: '-10' }} />

        <div className="d-flex justify-content-between align-items-start mb-5 flex-wrap w-100-resp">
          <div className="d-flex justify-content-start">
            <img src="/img/topo/logo-smartmoney.png" alt="Logo SmartMoney" className="logo img-resp" width={200} height={40} />
          </div>

          <div className="d-flex justify-content-end align-items-center gap-5 flex-wrap">
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
              <button className="navbar-toggler btn btn-sm btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={navAberta ? "true" : "false"}
                aria-label="Alternar navegação"
                onClick={alternarNav}
              >
                <FontAwesomeIcon icon={faBars} className="text-white" />
              </button>

              <div className={`collapse navbar-collapse card-sm p-sm-3 mt-sm-4 w-150-resp ${navAberta ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-sm-dark text-white text-sm-end">Quem somos</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-sm-dark text-white text-sm-end">Soluções</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-sm-dark text-white text-sm-end">Carreira</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-sm-dark text-white text-sm-end">Contato</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-sm-dark text-white text-sm-end">Suporte</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="d-none d-md-block">
              <button className="btn btn-lg btn-light">Cadastre-se</button>
            </div>
          </div>
        </div>

        <div className='d-flex d-sm-grid justify-content-between w-100-resp'>
          <ConteudoTopo />
        </div>
      </header>
    </>
  );
};

export default EstruturaTopo;