import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TextoTopo = () => {
    return (
        <>
            <div>
                <div className="w-100-resp text-sm-center d-sm-flex justify-content-sm-center">
                    <div className="border borda-customizada rounded-4 w-70-resp" style={{ width: '39%', borderColor: '#1d1b38 !important' }}>
                        <p className="text-white text-sm-center p-4 py-3 mb-0">
                            <FontAwesomeIcon icon={faStar} size="1x" color="#FFD700" /> Tecnologia disruptiva
                        </p>
                    </div>
                </div>
                <h1 className="text-white fs-32px-resp text-sm-center" style={{ fontSize: '60px' }}>Conta digital que não <br />é só uma conta digital.</h1>
                <p className="text-white text-sm-center">Pellentesque rutrum turpis non est turpis pretium morbi urna.</p>
                <div className="border border-primary text-sm-center m-0-auto-resp" style={{ width: '60px', marginBottom: '60px', marginTop: '60px' }}></div>
            </div>
        </>
    );
};

export default TextoTopo;