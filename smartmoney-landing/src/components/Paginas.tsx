const Paginas = ({ totalPaginas, indiceAtual, setIndiceAtual, postsPorPagina }) => {
    const aoClicarNoPonto = (indice) => {
        setIndiceAtual(indice * postsPorPagina);
    };

    return (
        <div className="d-flex justify-content-center mt-3">
            {Array.from({ length: totalPaginas }).map((_, indice) => (
                <button
                    key={indice}
                    className={`dot ${indiceAtual / postsPorPagina === indice ? 'active' : ''}`}
                    onClick={() => aoClicarNoPonto(indice)}
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: indiceAtual / postsPorPagina === indice ? '#007bff' : '#ccc',
                        margin: '0 5px',
                        border: 'none',
                    }}
                />
            ))}
        </div>
    );
};

export default Paginas;