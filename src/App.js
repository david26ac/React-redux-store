import './App.css';

//Materialize
import 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";

//ROuter
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


//Components
import Header from './components/header';
import Products from './components/products';
import Search from './components/search';
import Banner from './components/banner';
import Shop_car from './components/shop_car';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Switch>
            <Route path='/' exact component={Search}></Route>
            <Route path='/compra' component={Shop_car}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
