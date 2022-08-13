import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/home'
import Customer from './pages/customer';
import Chef from './pages/chef';
import Manager from './pages/manager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path ='/customer' element={<Customer/>}/>
          <Route path ='/chef' element={<Chef/>}/>
          <Route path ='/manager' element={<Manager/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
