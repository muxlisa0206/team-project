import React from 'react'
import Layout from './components/layout/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import CatalogPage from './page/catalog/CatalogPage';
import CatalogDoorsPage from './page/catalogDoor/CatalogDoorsPage';
import SinglePage from './page/single/SinglePage';
// import ContactPage from './page/contact/ContactPage';
import StatePage from './page/state/StatePage';
import Notfound from './page/notfound/Notfound';
import DastavkaPage from './page/dastavka/DastavkaPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='Catalog' element={<CatalogPage/>}/>
          <Route path='/Catalog/:id' element={<CatalogDoorsPage/>}/>
          <Route path='/CatalogDoors/:Single' element={<SinglePage/>}/>
          {/* <Route path='Contact' element={<ContactPage/>}/> */}
          <Route path='State' element={<StatePage/>}/>
          <Route path='Dastavka' element={<DastavkaPage/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
