
import './App.css';

import {Button} from 'react-bootstrap';
import {React,BrowserRouter as Router, Route,Routes} from 'react-router-dom';
//pages
import AddProduct from './Pages/addProduct';
import Header from './Pages/Header';
import UpdateProduct from './Pages/updateProduct';
import Login from './Pages/login';
import Register from './Pages/register';
import Protected from './Protected';
import ProductList from "./Pages/ProductList";

function App() {
  return (
    <div className="App">
      
      <Router>
      
      {/* <button>simple button</button>
      <Button>bootstrap button</Button> */}
        <Routes>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/' element={ 
        <Protected Cmp={ProductList}/>
        }/>
        <Route path='/add' element={ 
        // <AddProduct/> 
        <Protected Cmp={AddProduct}/>
        }/>
        <Route path='/update' element={ 
        <Protected Cmp={UpdateProduct} />
        // <UpdateProduct/> 
        }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
