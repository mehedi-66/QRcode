import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Qr from './Component/QR/Qr';
import Bill from './Component/Bill/Bill';
import Layout from './Layout';
import Billcreate from './Component/Bill/Billcreate'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Qr" element={<Qr />} />
        <Route path="Bill" element={<Bill />} />
        <Route path="billcreate" element={<Billcreate />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
