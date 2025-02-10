import { useRouter } from 'next/router';
import Link from '../components/Link';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import Rodape from '../components/Rodape';
import useNoticia from '../hooks/useNoticias';
import GlobalStyles from '@/app/styles/globalStyles';
import EstruturaTopoNoticia from '../components/EstruturaTopoNoticia';

const Noticia = () => {
    const router = useRouter();
    const { id } = router.query;
    const { post, carregando } = useNoticia(id);

    if (carregando) {
        return <Loading />;
    }

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <GlobalStyles />
            <EstruturaTopoNoticia />
            <div style={{ padding: '30px 100px 0px 100px' }}>
                <div className="d-flex align-items-start p-sm-3 px-sm-4 padding-resp">
                    <Link className='d-flex align-items-center text-secondary text-decoration-none' href='/'>
                        <FontAwesomeIcon className="me-2" icon={faChevronLeft} />
                        Voltar
                    </Link>
                    <div className="d-grid justify-content-center w-50 mx-auto">
                        <div className="d-flex justify-content-start align-items-center mb-3">
                            <FontAwesomeIcon className="text-secondary me-1" icon={faHouse} />
                            <p className="text-secondary d-flex justify-content-start align-items-center mb-0">/ artigos /
                                <a className="text-decoration-none text-primary ms-1 mb-0">Lorem, ipsum dolor sit amet consecte...</a>
                            </p>
                        </div>
                        <h1 className="mb-4" style={{ fontSize: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo dui nec dolor ut commodo dui nec ipsum</h1>
                        <div className="d-flex justify-content-start align-items-center mb-3">
                            <img src="/img/secao/Ellipse-3.png" width={29} alt="" />
                            <p className="text-secondary ms-3 mb-2">Por</p>
                            <p className="text-secondary fw-medium ms-1 mb-2">Luis henrique silva</p>
                            <img className="mx-3 mb-2" src="/img/secao/Ellipse-133.png" width={6} alt="" />
                            <p className="text-secondary mb-2">{new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}</p>
                        </div>
                    </div>
                </div>

                <div className="d-grid">
                    <div className="d-flex justify-content-center my-5">
                        <img className="img-fluid" src="/img/secao/Group-135.png" style={{ width: '1250px', height: '434px' }} />
                    </div>

                    <div className="d-grid justify-content-center w-50 mx-auto mb-5">
                        <div className="border p-5" style={{ backgroundColor: '#f3f4f5' }}>
                            <p className="fs-6 mb-0">Você já ouviu falar na utilização de manual de atendimento ao cliente na advocacia? É um documento que aborda os principais pontos de dúvida do relacionamento do cliente com o advogado ou escritório e que visa esclarecer, desde já, como esse relacionamento irá funcionar.</p>
                        </div>

                        <div className="mt-5">
                            <h1 className="mb-4" style={{ fontSize: '36px' }}>{post.title.rendered}</h1>
                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
};

export default Noticia;
