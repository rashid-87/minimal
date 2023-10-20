import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
            <div className="header__logo">
              <h1 className="header__title">Velocity</h1>
            </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">Home</li>
              <li className="header__item">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header

