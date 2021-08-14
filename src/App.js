import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'
import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App({navigateTo}) {
  const topLinks = [
      { name: 'Menu', url: '#' },
      { name: 'Some text', url: '#' },
      { name: 'Another item', url: '#' },
      { name: 'One more', url: '#' },
      { name: 'And last one', url: '#' }
  ]

  const mainLinks = [
      { name: 'Home', url: '/' },
      { name: 'Service', url: '/services' },
      {
          name: 'Works',
          links: [
              { name: 'All', url: '#' },
              { name: 'Graphic', url: '#' },
              { name: 'Design', url: '#' },
              { name: 'Logo', url: '#' },
              { name: 'Website', url: '#' }
          ]
      },
      { name: 'About me', url: '/about-me' },
      { name: 'Contact', url: '/contact' }
  ]

  return (
    <Router>
      <Header mainLinks={mainLinks} topLinks={topLinks} />
      <main>
        <Switch>
            <Route path="/services" component={Services} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
        </Switch>
      </main>
      <Footer mainLinks={mainLinks} />
    </Router>
  );
}

export default App;
