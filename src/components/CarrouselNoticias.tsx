import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { fetchPosts } from '../services/api';
import BtnNavegacao from './BtnNavegacao';
import Post from './Posts';
import Paginas from './Paginas';
import { useMediaQuery } from 'react-responsive';

interface PostType {
    id: number;    
    title: {
        rendered: string;
    };
    class_list: string[];
    date: string;
    content: string;
}

const CarrosselNoticias = () => {
    const [posts, setPosts] = useState<PostType[]>([]); 
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const postsPorPagina = 4;
    const ehMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const carrosselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const obterPosts = async () => {
            try {
                const dados = await fetchPosts();
                setPosts(dados);
            } catch (erro) {
                console.error('Erro ao carregar posts:', erro);
            } finally {
                setCarregando(false);
            }
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

    if (carregando) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <BtnNavegacao
                onProximo={proximoPosts}
                onAnterior={postsAnteriores}
                ehMobile={ehMobile}
            />
            <div
                className={`row flex-nowrap ${ehMobile ? 'overflow-auto' : ''}`}
                style={{ gap: '20px' }}
                ref={carrosselRef}
            >
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