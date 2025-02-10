import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BotaoNavegacao = ({ onClick, direcao }) => {
    return (
        <div className="rounded-3 p-2 px-3 btn-customizado" aria-hidden="true" onClick={onClick}>
            <FontAwesomeIcon className="text-primary icon-hover" icon={direcao === 'esquerda' ? faChevronLeft : faChevronRight} />
            <span className="visually-hidden">{direcao === 'esquerda' ? 'Anterior' : 'Próximo'}</span>
        </div>
    );
};

export default BotaoNavegacao;