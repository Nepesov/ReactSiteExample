import './card.css' ; 
import cat from './../../img/categories/cat-01.jpg';
import arrowImg from './../../img/icons/arrow.svg';
const Cards = (props) => {
    return ( <div className="cards">
        <a href="#!" className='card__link'></a>
        <img className="card__img" src={props.img} alt="" />

        <div className="card__body">
            <div className="card__text">
                <div className="card__title">{props.title}</div>
                <div className="card__muted">Explore now!</div>
            </div>
            <div className="card__icon">
                <img src={arrowImg} alt="arrowimg" />
            </div>
        </div>
    </div> 
        
    );
}
 
export default Cards;