import GlobalStyles from '../app/styles/globalStyles';

const Loading = () => {
    return (
        <>
            <GlobalStyles />
            <div className="d-flex justify-content-center align-items-center bg-white position-fixed vh-100 vw-100" style={{ zIndex: '99999' }}>
                <div className="loader">
                    Carregando
                </div>
            </div>
        </>
    );
};

export default Loading;