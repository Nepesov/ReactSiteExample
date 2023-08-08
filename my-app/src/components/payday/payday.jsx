import yellowPromo from './../../img/images/promo-img.jpg';
import './payday.css' ;

const Payday = () => {
    return ( 
    <section className="payday">
        <div className="payday__content">
            <div className="payday__img">
                <img src={yellowPromo} alt="yellowPromo" />
            </div>
            <div className="payday__text">
                <div className="payday__title">
                <span className='highlight'>
              <span>PAYDAY</span> 
              </span>
              SALE NOW 
              </div>
              <div className="payday__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
              </div>
              <div className="payday__belowdesc">
              <span className='payday__belowdesc_bold'>1 June - 10 June 2021</span>
              *Terms & Conditions apply
              </div>
              <div className="payday__btn-wrapper">
                        <a href="#!" className="payday-btn">
                            Shop now
                        </a>
                        </div>
            </div>
            </div>
    </section> );
}
 
export default Payday  ;