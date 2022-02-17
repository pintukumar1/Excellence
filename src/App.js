import React from "react";
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path="/" element={<BurgerBuilder />} />  
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
