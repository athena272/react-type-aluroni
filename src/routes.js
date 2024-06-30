import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <>
      <main className='container'>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
              <Route path='prato/:id' element={<Prato />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}