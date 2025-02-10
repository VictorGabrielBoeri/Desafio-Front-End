import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

const useNoticia = (id) => {
    const [post, setPost] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            const obterPost = async () => {
                const dados = await fetchPosts();
                const postEncontrado = dados.find(post => post.id === parseInt(id));
                setPost(postEncontrado);
            };
            obterPost();
        }
    }, [id]);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setCarregando(false);
        }, 5000);

        return () => clearTimeout(temporizador);
    }, []);

    return { post, carregando };
};

export default useNoticia;