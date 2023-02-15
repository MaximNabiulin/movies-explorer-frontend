import React from 'react';
import { fakeCards } from '../../utils/utils';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// импортируем компоненты приложения
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import Profile from '../Profile/Profile';
import HeaderAuthLinks from '../HeaderAuthLinks/HeaderAuthLinks';
import HeaderWithNavigation from '../HeaderWithNavigation/HeaderWithNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotFound from '../NotFound/NotFound';
// import Footer from '../Footer/Footer';

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuClick () {
    setIsBurgerMenuOpen(true);
    console.log(isBurgerMenuOpen, 'Click!');
  };

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  // Возвращаем разметку
  return (
    <div className="App">
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<HeaderAuthLinks />} />
            </Route>
            <Route path="/movies" element={
              <Movies
                cards={fakeCards}
              />}
            >
              <Route index element={
                <>
                  <HeaderWithNavigation
                    onOpenMenu={handleBurgerMenuClick}
                    onClose={closeBurgerMenu}
                  />
                  <BurgerMenu
                    isOpen={isBurgerMenuOpen}
                    onClose={closeBurgerMenu}
                  />
                </>
              } />
            </Route>
            <Route path="/saved-movies" element={
              <SavedMovies
                cards={fakeCards}
              />}
            >
              <Route index element={
                <>
                  <HeaderWithNavigation
                    onOpenMenu={handleBurgerMenuClick}
                    onClose={closeBurgerMenu}
                  />
                  <BurgerMenu
                    isOpen={isBurgerMenuOpen}
                    onClose={closeBurgerMenu}
                  />
                </>
              } />
            </Route>
            <Route path="/signup" element={<Register />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/profile" element={<Profile />}>
              <Route index element={
                <>
                  <HeaderWithNavigation
                    onOpenMenu={handleBurgerMenuClick}
                    onClose={closeBurgerMenu}
                  />
                  <BurgerMenu
                    isOpen={isBurgerMenuOpen}
                    onClose={closeBurgerMenu}
                  />
                </>
              } />
            </Route>
            <Route path='/notfound' element={<NotFound/>} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
