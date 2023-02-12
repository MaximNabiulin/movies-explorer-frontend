import React from 'react';

import Header from '../Header/Header';

// импортируем компоненты страницы Main
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

//подключаем стили
// import './Main.css';

function Main() {
  return (
    <>
      <Header isLoggedIn ={true} />
      <main className="content">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio />
      </main>
      <Footer/>
    </>
  );
}

export default Main;
