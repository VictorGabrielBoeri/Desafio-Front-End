import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fetchPosts } from '../services/api';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const CarrosselNoticias = () => {
    const [posts, setPosts] = useState([])
    const [indiceAtual, setIndiceAtual] = useState(0)
    const postsPorPagina = 4
    const ehMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const carrosselRef = useRef(null)

    useEffect(() => {
        const obterPosts = async () => {
            const dados = await fetchPosts();
            setPosts(dados)
        };

        obterPosts();
    }, []);

    const proximoPosts = () => {
        if (indiceAtual + postsPorPagina < posts.length) {
            setIndiceAtual(indiceAnterior => indiceAnterior + postsPorPagina)
            rolarProximo();
        }
    };

    const postsAnteriores = () => {
        if (indiceAtual - postsPorPagina >= 0) {
            setIndiceAtual(indiceAnterior => indiceAnterior - postsPorPagina)
            rolarAnterior();
        }
    };

    const aoClicarNoPonto = (indice) => {
        setIndiceAtual(indice * postsPorPagina)
        if (carrosselRef.current) {
            carrosselRef.current.scrollTo({
                left: indice * 350,
                behavior: 'smooth',
            });
        }
    };

    const rolarProximo = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    };

    const rolarAnterior = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    };

    const totalPaginas = ehMobile ? 4 : Math.ceil(posts.length / postsPorPagina)

    return (
        <>
            <div className="d-flex justify-content-end align-items-center w-100 mb-5">
                <div className="rounded-3 p-2 px-3 btn-customizado" aria-hidden="true" onClick={postsAnteriores} style={{ display: !ehMobile ? 'block' : 'none' }}>
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronLeft} />
                    <span className="visually-hidden">Anterior</span>
                </div>

                <div className="rounded-3 p-2 px-3 btn-customizado" aria-hidden="true" onClick={proximoPosts} style={{ display: !ehMobile ? 'block' : 'none' }}>
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronRight} />
                    <span className="visually-hidden">Próximo</span>
                </div>
            </div>

            <div className="row flex-nowrap" style={{ gap: '20px' }} ref={carrosselRef} className={`d-flex ${ehMobile ? 'overflow-auto' : ''}`}>
                {ehMobile ? posts.map((post) => (
                    <div key={post.id} className="col-sm-12 col-md-3 d-grid">
                        <Link className="text-decoration-none text-500 text-black" href={`/Noticia?id=${post.id}`}>
                            <div className="card-body">
                                <img className="img-fluid mb-3" width={360} src="/img/secao/Mask-group.png" alt="" />
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="card-text text-start fs--1 me-3">
                                        {post.class_list && post.class_list.length > 0 ? (<div className="text-primary fw-medium text-decoration-none"> {post.class_list[0]}</div>) : ('Sem categoria')}
                                    </div>
                                    <p className="card-text text-center fs--1">
                                        {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', }).replace(/^./, (match) => match.toUpperCase())}
                                    </p>
                                </div>
                                <h4 className="card-title text-start fs-6 w-75 mb-3">{post.title.rendered}</h4>
                            </div>
                        </Link>
                    </div>
                ))
                    : posts.slice(indiceAtual, indiceAtual + postsPorPagina).map((post) => (
                        <div key={post.id} className="col-sm-12 col-md-3 d-grid">
                            <Link className="text-decoration-none text-500 text-black" href={`/Noticia?id=${post.id}`}>
                                <div className="card-body">
                                    <img className="img-fluid mb-3" width={360} src="/img/secao/Mask-group.png" alt="" />
                                    <div className="d-flex justify-content-start mb-3">
                                        <div className="card-text text-start fs--1 me-3">
                                            {post.class_list && post.class_list.length > 0 ? (<div className="text-primary fw-medium text-decoration-none">{post.class_list[0]}</div>) : ('Sem categoria')}
                                        </div>
                                        <p className="card-text text-center fs--1">
                                            {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', }).replace(/^./, (match) => match.toUpperCase())}
                                        </p>
                                    </div>
                                    <h4 className="card-title text-start fs-6 w-75 mb-3 fw-normal">{post.title.rendered}</h4>
                                    <div className="d-flex justify-content-start align-items-center mb-5">
                                        <img src="/img/secao/Mask-group-avatar.png" width={48} />
                                        <div className="ms-3">
                                            <h4 className="card-title text-start fs-6 w-75 mb-0 fw-medium w-100">Savannah Nguyen</h4>
                                            <h4 className="card-title text-start fs-6 w-75 mb-0 fw-normal">Autor</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>

            <div className="d-flex justify-content-center mt-3">
                {Array.from({ length: totalPaginas }).map((_, indice) => (
                    <button key={indice} className={`dot ${indiceAtual / postsPorPagina === indice ? 'active' : ''}`} onClick={() => aoClicarNoPonto(indice)} style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: indiceAtual / postsPorPagina === indice ? '#007bff' : '#ccc', margin: '0 5px', border: 'none', }} />
                ))}
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(CarrosselNoticias), { ssr: false });