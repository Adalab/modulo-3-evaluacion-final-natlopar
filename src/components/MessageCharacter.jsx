import { Link } from 'react-router-dom';
import '../styles/layout/detail.scss';

function MessageCharacter() {
  return (
    <div className="window">
      <Link to={'/'} className="detail__link">
        <i className="fa-solid fa-circle-arrow-left detail__link--iconE"></i>
      </Link>
      <p className="notFound">This character does not exist</p>
    </div>
  );
}

export default MessageCharacter;
