import './App.scss';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {

  const [navToggle, setNavToggle] = useState(false)

  const handleNavToggle = () => {
      setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={navToggle ? 'sideBar nav-toggle' : 'sideBar'}>
        <NavBar/>
      </div>
      <div className="nav-btn" onClick={handleNavToggle}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/about">
              <AboutPage/>
            </Route>
            <Route exact path="/portfolios">
              <PortfoliosPage/>
            </Route>
            <Route exact path="/blogs">
              <BlogsPage/>
            </Route>
            <Route exact path="/contact">
              <ContactPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
