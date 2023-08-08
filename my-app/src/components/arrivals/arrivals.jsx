import Cards from '../card/card';
import './arrivals.css'
import cat01 from './../../img/categories/cat-01.jpg';
import cat02 from './../../img/categories/cat-02.jpg';
import cat03 from './../../img/categories/cat-03.jpg';
const Arrivals = () => {
    return ( <section className='arrivals'>
        <div className="container">
            <div className="arrivals__header">
                <h2 className="title-2">
                    NEW ARRIVALS
                </h2>
                <div className="arrivals__cards">
                    <Cards title="Hoodies & Sweetshirt" img={cat01}/>
                    <Cards title="Coats & Parkas" img={cat02}/>
                    <Cards title="Tees & T-Shirts" img={cat03}/>
                    
                </div>
            </div>
        </div>
    </section> );
}
 
export default Arrivals ;