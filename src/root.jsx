import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Routes, Route, Navigate, HashRouter } from "react-router";
import './style/index.scss';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Logement from './pages/Logement.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './components/layout.jsx';
import data from './assets/data.json'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home data={data} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement" element={<Logement data={data}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    </StrictMode>
)
