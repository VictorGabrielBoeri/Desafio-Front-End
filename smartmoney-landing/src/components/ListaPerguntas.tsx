import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ListaPerguntas = () => {
    const [collapseAtivo, setCollapseAtivo] = useState(null);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    const alternarCollapse = (index) => {
        setCollapseAtivo(collapseAtivo === index ? null : index);
    };

    return (
        <>
            <ul className="list-group w-50 w-100-resp">
                {[
                    { id: 1, pergunta: "Quais recursos ainda posso acessar nas novas Páginas?" },
                    { id: 2, pergunta: "Como faço para abrir a minha nova Página?" },
                    { id: 3, pergunta: "Há algum conteúdo que não migrará com a minha Página?" },
                    { id: 4, pergunta: "Como as pessoas encontrarão a minha nova Página?" },
                    { id: 5, pergunta: "O que é o Feed? Como faço para configurá-lo?" },
                ].map((item, index) => (
                    <div key={item.id}>
                        <a className={`list-group-item border-resp p-5 py-sm-4 ${collapseAtivo === index ? 'border-0' : ''}`} data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} role="button" aria-expanded={collapseAtivo === index ? 'true' : 'false'} aria-controls={`collapseExample${item.id}`} onClick={() => alternarCollapse(index)}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <p className="text-primary fs-3">{item.id < 10 ? `0${item.id}` : item.id}</p>
                                    <p className="fw-normal fs-5 fs-6-sm ms-3 mb-3 me-sm-2">{item.pergunta}</p>
                                </div>
                                <FontAwesomeIcon icon={collapseAtivo === index ? faMinus : faPlus} />
                            </div>
                        </a>
                        <div className={`collapse ${collapseAtivo === index ? 'show' : ''}`} id={`collapseExample${item.id}`}>
                            <div className="card card-body border-0 pb-5 pt-0" style={{ paddingLeft: '95px', paddingRight: '95px' }}>
                                Conteúdo fictício para o componente collapse. Este painel está oculto por padrão, mas será revelado quando o usuário ativar o gatilho relevante.
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default ListaPerguntas;