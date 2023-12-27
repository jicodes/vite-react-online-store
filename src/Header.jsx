import Navbar from "./Navbar";

import logoUrl from "./assets/logo.jpg";

import "./Header.css";

function Header({setPage}) {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <img src={logoUrl} alt="half lemon" className="header__logo" />
      </a>
      <h1 className="header__title">Lemon Kitchen</h1>
      <Navbar className="header__nav" setPage={setPage}/>
    </header>
  );
}

export default Header;
