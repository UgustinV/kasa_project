import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './style/index.scss';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import LogementWrapper from './components/logementWrapper.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './components/layout.jsx';
import data from './assets/data.json'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/kasa_project'>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home data={data} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<LogementWrapper data={data}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
)
