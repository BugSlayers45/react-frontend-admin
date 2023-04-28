import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Category from './component/category/Category';
import Product from './component/product/Product';
import Customer from './component/customer/Customer';
import Seller from './component/seller/Seller';
import Order from './component/orders/order';
import AddCategory from './component/category/AddCategory';
import PendingSeller from './component/seller/PendingSeller';
import MainContent from './component/main-content/MainContent';


function App() {
  return <>
    <Routes>
      {/* <Route path='/' element={<Homepage />} >

      </Route> */}
      <Route path='/' element={<Home />} >
        <Route path='/' element={<MainContent />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/order' element={<Order />} />
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path="/addcategory/:id" element={<AddCategory />} />
        <Route path='/pendingseller' element={<PendingSeller />} />
       
      </Route>

    </Routes>
  </>
}

export default App;
