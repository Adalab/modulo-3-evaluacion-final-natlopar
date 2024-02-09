import { Link } from 'react-router-dom';

function MessageCharacter() {
  return (
    <div>
      <Link to={'/'} className="link">
        <i className="fa-solid fa-circle-arrow-left">Volver</i>
      </Link>
      <p>This character does not exist</p>
    </div>
  );
}

export default MessageCharacter;
