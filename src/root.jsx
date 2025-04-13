import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import './style/index.scss';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Logement from './pages/Logement.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './components/layout.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/kasa_project'>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement" element={<Logement />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/not-found" />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
)
