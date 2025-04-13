import '../style/pages/NotFound.scss'
import { NavLink } from "react-router";


function NotFound() {

  return (
    <div id='not-found'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/" end>Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default NotFound
