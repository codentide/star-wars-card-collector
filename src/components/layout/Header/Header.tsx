import { NavLink } from 'react-router'
import './header.scss'

export const Header = () => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        Star Wars
        <br />
        Jedi Collector
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" children="Album" />
          </li>
          <li>
            <NavLink to="/unbox" children="Unbox" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
