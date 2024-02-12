import title from '../images/title.jpg';
import back from '../images/back.jpg';
import flag from '../images/banderas.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bodyApp__header">
      <img src={flag} alt="imagen banderas" className="bodyApp__header--img" />
      <Link to={'/'} className="detail__link">
        <img src={title} alt="title" className="bodyApp__header--title" />
      </Link>
      <img src={back} alt="imagen castillo" className="bodyApp__header--img" />
    </header>
  );
}

export default Header;
