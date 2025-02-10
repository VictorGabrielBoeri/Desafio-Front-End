import Link from 'next/link';

const Post = ({ post }) => {
    return (
        <div className="col-sm-12 col-md-3 d-grid">
            <Link className="text-decoration-none text-500 text-black" href={`/Noticia?id=${post.id}`}>
                <div className="card-body">
                    <img className="img-fluid mb-3" width={360} src="/img/secao/Mask-group.png" alt="" />
                    <div className="d-flex justify-content-start mb-3">
                        <div className="card-text text-start fs--1 me-3">
                            {post.class_list && post.class_list.length > 0 ? (
                                <div className="text-primary fw-medium text-decoration-none">{post.class_list[0]}</div>
                            ) : ('Sem categoria')}
                        </div>
                        <p className="card-text text-center fs--1">
                            {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' }).replace(/^./, match => match.toUpperCase())}
                        </p>
                    </div>
                    <h4 className="card-title text-start fs-6 w-75 mb-3">{post.title.rendered}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Post;
