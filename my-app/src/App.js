import Header from './components/header/header' ; 
import Promo from 'C:/reactpractic/my-app/src/components/promo/promo';
import Brands from './components/brands/brands' ;
import Arrivals from 'C:/reactpractic/my-app/src/components/arrivals/arrivals' ;
import Payday from './components/payday/payday';
import Favorite from './components/favorite/favorite';
function App() {
  return (
    <div className="App">
     <Header/> 
     <Promo/>
     <Brands/>
     <Arrivals/>  
     <Payday/>
     <Favorite/>
    </div>
  );
}

export default App;
