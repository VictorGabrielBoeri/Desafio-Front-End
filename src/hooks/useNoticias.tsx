// hooks/useNoticia.ts
import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

export interface Post {
    id: number;
    class_list?: string[];
    date: string;
    title: { rendered: string };
    content: { rendered: string };
}

const useNoticia = (id: string | number | null) => {
    const [post, setPost] = useState<Post | null>(null);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [isClient, setIsClient] = useState(false); // Estado para verificar se estamos no cliente

    // Isso garante que os hooks só sejam chamados no cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !id) return; // Só executa quando estiver no cliente e com id

        const obterPost = async () => {
            try {
                const dados: Post[] = await fetchPosts();
                const postEncontrado = dados.find(post => post.id === Number(id)) || null;
                setPost(postEncontrado);
            } finally {
                setCarregando(false);
            }
        };

        obterPost();
    }, [id, isClient]);

    return { post, carregando };
};

export default useNoticia;