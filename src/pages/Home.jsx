import '../style/Home.scss'
import { NavLink } from "react-router";

function Home() {

  return (
    <div>
      <NavLink to="/about" end>About</NavLink>
      <NavLink to="/logement" end>Logement</NavLink>
    </div>
  )
}

export default Home
