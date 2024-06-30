import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import Header from 'components/Header';
import NotFound from 'pages/NotFound';

export default function Prato() {
    // console.log(useLocation());
    // const { state } = useLocation();
    // const prato = state as typeof cardapio[0];
    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    if (!prato) {
        return <NotFound />;
    }
    return (
        <Routes>
            <Route path='*' element={<Header />}>
                <Route index element={
                    <>
                        <button
                            className={styles.voltar}
                            onClick={() => navigate(-1)}
                        >
                            {'< Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}>
                                {prato.title}
                            </h1>
                            <div className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}>
                                    {prato.description}
                                </p>
                                <TagsPrato
                                    prato={prato}
                                />
                            </div>
                        </section>
                    </>
                } />
            </Route>
        </Routes>
    );
}