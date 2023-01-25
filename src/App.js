import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
      
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          {/*<Route path="/about" component={About}>*/}
          <Route path="/products" exact component={ProductsPage}><ProductsPage/></Route>
          <Route path="/products/:_id" exact component={SingleProduct}><SingleProduct/></Route>
          <Route path="/cart"><Cart/></Route>
        </Switch>
        <Toaster/>
       
      </Router>
    </>
  );
}

export default App;
