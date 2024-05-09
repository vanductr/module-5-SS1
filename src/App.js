import './App.css';
import Clock from './component/Clock';
import ManagerUser from './component/ManagerUser';
import MobileShop from './component/MobileShop';
import Profile from './component/Profile';
import ShoppingCart from './component/ShoppingCart';
import SumCalculator from './component/SumCalculator';
import Time from './component/Time';
import Convert from './convert_jsx/Convert';
// import './css/bootstrap.min.css'
// import './css/font-awesome.min.css'
// import './css/owl.carousel.css'
// import './css/responsive.css'

function App() {

  return (
    <>
      <Time/>

      <Profile/>

      <Convert></Convert>

      <SumCalculator/>

      <Clock></Clock>

      <ShoppingCart/>

      <ManagerUser/>

      <MobileShop/>
    </>
  );
}

export default App;
