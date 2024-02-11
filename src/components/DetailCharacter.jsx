import { Link, useParams } from 'react-router-dom';
import '../styles/layout/detail.scss';
import photo from '../images/default.jpg';
import PropTypes from 'prop-types';
import gryf from '../images/gryf.png';
import huff from '../images/huff.png';
import raven from '../images/raven.png';
import slytherin from '../images/slytherin.png';
import witch from '../images/maga.jpg';

function DetailCharacter({ characters }) {
  const { id } = useParams();
  const findCharacter = characters.find((char) => char.id === id);
  const renderImage = () => {
    if (findCharacter.image === '' && findCharacter.gender === 'male') {
      return photo;
    } else if (
      findCharacter.image === '' &&
      findCharacter.gender === 'female'
    ) {
      return witch;
    } else {
      return findCharacter.image;
    }
  };
  const renderHouse = () => {
    if (findCharacter.house === 'Gryffindor') {
      return gryf;
    } else if (findCharacter.house === 'Slytherin') {
      return slytherin;
    } else if (findCharacter.house === 'Ravenclaw') {
      return raven;
    } else {
      return huff;
    }
  };

  const classBackground = () => {
    if (findCharacter.house === 'Gryffindor') {
      return 'gryfBack';
    } else if (findCharacter.house === 'Slytherin') {
      return 'slytherin';
    } else if (findCharacter.house === 'Ravenclaw') {
      return 'raven';
    } else {
      return 'huff';
    }
  };
  return (
    <section className="detail">
      <Link to={'/'} className="detail__link">
        <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>
      </Link>
      <article className={`detail__card ${classBackground()}`}>
        <img
          className="detail__card--img"
          src={renderImage()}
          alt={`Imagen de ${findCharacter.name}`}
        />
        <div className="detail__card--total">
          <h3 className="detail__card--title">{findCharacter.name}</h3>
          <h4 >Species:</h4>
          <p className="detail__card--p">{findCharacter.species}</p>
          <h4>Gender:</h4>
          <p className="detail__card--p">{findCharacter.gender}</p>
          <h4 className="detail__card--text">
            Status:{' '}
            {findCharacter.alive ? (
              <i className="fa-solid fa-heart-pulse heart"></i>
            ) : (
              <i className="fa-solid fa-skull skull"></i>
            )}
          </h4>
          <div>
            {findCharacter.alternate_names.length > 0 ? (
              <h4  className="detail__card--text">Alternate names:</h4>
            ) : (
              <p></p>
            )}

            {findCharacter.alternate_names.length > 0 ? (
              findCharacter.alternate_names.map((char, i) => (
                <p key={i} className="detail__card--p">
                  {char}
                </p>
              ))
            ) : (
              <li></li>
            )}
          </div>
          <img
            src={renderHouse()}
            alt={`Imagen de ${findCharacter.house}`}
            className="detail__card--house"
          ></img>
        </div>
      </article>
    </section>
  );
}

DetailCharacter.propTypes = {
  characters: PropTypes.array,
};

export default DetailCharacter;
