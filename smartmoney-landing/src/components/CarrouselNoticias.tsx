import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fetchPosts } from '../services/api';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const CarrouselNoticias = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    const [posts, setPosts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const postsPerPage = 4;
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };

        getPosts();
    }, []);

    const nextPosts = () => {
        if (currentIndex + postsPerPage < posts.length) {
            setCurrentIndex(prevIndex => prevIndex + postsPerPage);
        }
    };

    const prevPosts = () => {
        if (currentIndex - postsPerPage >= 0) {
            setCurrentIndex(prevIndex => prevIndex - postsPerPage);
        }
    };


    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="d-flex justify-content-end align-items-center w-100 mb-5">
                <div
                    className="rounded-3 me-3 p-2 px-3 btn-customizado"
                    aria-hidden="true"
                    type="button"
                    onClick={scrollPrev}
                    style={{ display: isMobile ? 'block' : 'none' }} // Exibe apenas no mobile
                >
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronLeft} />
                    <span className="visually-hidden">Previous</span>
                </div>

                <div
                    className="rounded-3 p-2 px-3 btn-customizado"
                    aria-hidden="true"
                    type="button"
                    onClick={scrollNext}
                    style={{ display: isMobile ? 'block' : 'none' }} // Exibe apenas no mobile
                >
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronRight} />
                    <span className="visually-hidden">Next</span>
                </div>

                <div
                    className="rounded-3 p-2 px-3 btn-customizado"
                    aria-hidden="true"
                    type="button"
                    onClick={prevPosts}
                    style={{ display: !isMobile ? 'block' : 'none' }} // Exibe apenas no desktop
                >
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronLeft} />
                    <span className="visually-hidden">Previous</span>
                </div>

                <div
                    className="rounded-3 p-2 px-3 btn-customizado"
                    aria-hidden="true"
                    type="button"
                    onClick={nextPosts}
                    style={{ display: !isMobile ? 'block' : 'none' }} // Exibe apenas no desktop
                >
                    <FontAwesomeIcon className="text-primary icon-hover" icon={faChevronRight} />
                    <span className="visually-hidden">Next</span>
                </div>
            </div>

            <div className="row flex-nowrap" style={{ gap: '20px' }} ref={carouselRef} className={`d-flex ${isMobile ? 'overflow-auto' : ''}`}>
                {isMobile ? posts.map((post) => (
                    <div key={post.id} className="col-sm-12 col-md-3 d-grid">
                        <Link className="text-decoration-none text-500 text-black" href={`/Noticia?id=${post.id}`}>
                            <div className="card-body position-relative">
                                <img className="img-fluid mb-3" width={360} src="/img/secao/Mask-group.png" alt="" />
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="card-text text-start fs--1 me-3">
                                        {post.class_list && post.class_list.length > 0 ? (<a className="text-primary fw-medium text-decoration-none"> {post.class_list[0]}</a>) : ('Sem categoria')}
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
                    : posts.slice(currentIndex, currentIndex + postsPerPage).map((post) => (
                        <div key={post.id} className="col-sm-12 col-md-3 d-grid">
                            <Link className="text-decoration-none text-500 text-black" href={`/Noticia?id=${post.id}`}>
                                <div className="card-body position-relative">
                                    <img className="img-fluid mb-3" width={360} src="/img/secao/Mask-group.png" alt="" />
                                    <div className="d-flex justify-content-start mb-3">
                                        <div className="card-text text-start fs--1 me-3">
                                            {post.class_list && post.class_list.length > 0 ? (
                                                <a className="text-primary fw-medium text-decoration-none">
                                                    {post.class_list[0]}
                                                </a>
                                            ) : (
                                                'Sem categoria'
                                            )}
                                        </div>
                                        <p className="card-text text-center fs--1">
                                            {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', }).replace(/^./, (match) => match.toUpperCase())}
                                        </p>
                                    </div>
                                    <h4 className="card-title text-start fs-6 w-75 mb-3">{post.title.rendered}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(CarrouselNoticias), { ssr: false });
