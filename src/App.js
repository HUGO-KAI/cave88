import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import TopJumper from './components/TopJumper/TopJumper'
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail/Detail.jsx'
import NotFound from './pages/NotFound/NotFound'
import Promo from './pages/Promo/Promo'
import SignIn from './pages/SignIn/SignIn'
import Admin from './pages/Admin/Admin'
import Mention from './pages/Mention/Mention'

const telephone = '0642888868';
const city = 'Aubervilliers';
const adr = '3 Rue des Gardinoux';
const ville = '93300 Aubervilliers';
const mail = 'cave88vip@gmail.com';

function App() {
  return (
    <Fragment>
      <Router>
        <Header tel= {telephone} city = {city}/>
        <TopJumper />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Detail/>} />
            <Route path='/promo' element={<Promo/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/mention' element={<Mention/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer tel= {telephone} adr={adr} ville={ville} mail= {mail}/>
      </Router>
    </Fragment>
  );
}

export default App;
