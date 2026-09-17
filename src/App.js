

import './App.css';
import SecondClass from './SecondClass';
import FirstFunctionComponent from './FirstFunctionalComponent';


import CounterFuction from './counterFunction';
import First from './first';
import Count from './count';

function App() {
  return (
    <>
      <FirstFunctionComponent />
      <SecondClass />
      <CounterFuction />
      <First />
      <Count
       game="Bgmi"
       team="CRX" 
       game2 ="Clash Of clans"
       year = {2015}
       />
    </>
  );
}

export default App;