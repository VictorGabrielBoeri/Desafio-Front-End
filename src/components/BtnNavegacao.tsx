import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface NavegacaoProps {
    onProximo: () => void;
    onAnterior: () => void;
    ehMobile: boolean;
}

const Navegacao: React.FC<NavegacaoProps> = ({ onProximo, onAnterior, ehMobile }) => {
    return (
        <div className="d-flex justify-content-end align-items-center w-100 mb-5">
            <div className="rounded-3 p-2 px-3 btn-customizado" onClick={onAnterior} style={{ display: !ehMobile ? 'block' : 'none' }}>
                <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronLeft} />
                <span className="visually-hidden">Anterior</span>
            </div>
            <div className="rounded-3 p-2 px-3 btn-customizado" onClick={onProximo} style={{ display: !ehMobile ? 'block' : 'none' }}>
                <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronRight} />
                <span className="visually-hidden">Próximo</span>
            </div>
        </div>
    );
};

export default Navegacao;