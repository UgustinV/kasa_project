import '../style/Layout.scss'
import { NavLink } from "react-router";
import footerLogo from '../assets/footer-logo.svg';
import kasaLogo from '../assets/kasa-logo.svg';

function Layout({children}) {

    return (
        <>
            <div id='header-main'>
                <header>
                    <NavLink to="/" end>
                        <img id="kasa-logo" src={kasaLogo} alt="kasa-logo" />
                    </NavLink>
                    <nav>
                        <NavLink to="/" end>Accueil</NavLink>
                        <NavLink to="/about" end>A Propos</NavLink>
                    </nav>
                </header>
            <main>
                {children}
            </main>
            </div>
            <footer>
                <img src={footerLogo} alt="footer-logo" />
                <p>© 2024 Kasa. All rights reserved</p>
            </footer>
        </>
    )
}

export default Layout
