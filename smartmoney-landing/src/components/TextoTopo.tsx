import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TextoTopo = () => {
    return (
        <>
            <div>
                <p className="text-white text-sm-center">
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFD700" /> Tecnologia disruptiva
                </p>
                <h1 className="text-white fs-32px-resp text-sm-center" style={{ fontSize: '60px' }}>Conta digital que não <br />é só uma conta digital.</h1>
                <p className="text-white text-sm-center">Pellentesque rutrum turpis non est turpis pretium morbi urna.</p>
                <div className="border border-primary text-sm-center m-0-auto-resp" style={{ width: '60px', marginBottom: '60px', marginTop: '60px' }}></div>
            </div>
        </>
    );
};

export default TextoTopo;