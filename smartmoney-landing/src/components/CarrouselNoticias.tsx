import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { fetchPosts } from '../services/api';
import BtnNavegacao from '../components/BtnNavegacao';
import Post from '../components/Posts';
import Paginas from '../components/Paginas';
import { useMediaQuery } from 'react-responsive';

const CarrosselNoticias = () => {
    const [posts, setPosts] = useState([]);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const postsPorPagina = 4;
    const ehMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const carrosselRef = useRef(null);

    useEffect(() => {
        const obterPosts = async () => {
            const dados = await fetchPosts();
            setPosts(dados);
        };
        obterPosts();
    }, []);

    const proximoPosts = () => {
        if (indiceAtual + postsPorPagina < posts.length) {
            setIndiceAtual(indiceAnterior => indiceAnterior + postsPorPagina);
            rolarProximo();
        }
    };

    const postsAnteriores = () => {
        if (indiceAtual - postsPorPagina >= 0) {
            setIndiceAtual(indiceAnterior => indiceAnterior - postsPorPagina);
            rolarAnterior();
        }
    };

    const rolarProximo = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const rolarAnterior = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <BtnNavegacao
                onProximo={proximoPosts}
                onAnterior={postsAnteriores}
                ehMobile={ehMobile}
            />
            <div className="row flex-nowrap" style={{ gap: '20px' }} ref={carrosselRef} className={`d-flex ${ehMobile ? 'overflow-auto' : ''}`}>
                {posts.slice(indiceAtual, indiceAtual + postsPorPagina).map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
            <Paginas
                totalPaginas={Math.ceil(posts.length / postsPorPagina)}
                indiceAtual={indiceAtual}
                setIndiceAtual={setIndiceAtual}
                postsPorPagina={postsPorPagina}
            />
        </>
    );
};

export default dynamic(() => Promise.resolve(CarrosselNoticias), { ssr: false });