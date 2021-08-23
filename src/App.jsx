import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

function App() {
  const topLinks = [
    { id: '1', name: 'Menu', url: '#' },
    { id: '2', name: 'Some text', url: '#' },
    { id: '3', name: 'Another item', url: '#' },
    { id: '4', name: 'One more', url: '#' },
    { id: '5', name: 'And last one', url: '#' },
  ];

  const mainLinks = [
    { id: '1', name: 'Home', url: '/' },
    { id: '2', name: 'Service', url: '/services' },
    {
      id: '3',
      name: 'Works',
      links: [
        { id: '1', name: 'All', url: '#' },
        { id: '2', name: 'Graphic', url: '#' },
        { id: '3', name: 'Design', url: '#' },
        { id: '4', name: 'Logo', url: '#' },
        { id: '5', name: 'Website', url: '#' },
      ],
    },
    { id: '4', name: 'About me', url: '/about-me' },
    { id: '5', name: 'Contact', url: '/contact' },
  ];

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
