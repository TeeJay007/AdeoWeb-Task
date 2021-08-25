import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const mainLinks = [
  { id: '1', name: 'Home', url: '/' },
  { id: '2', name: 'Service', url: '/services' },
  { id: '4', name: 'About me', url: '/about-me' },
  { id: '5', name: 'Contact', url: '/contact' },
];

test('Check footer links', async () => {
  render(
    <BrowserRouter>
      <Footer mainLinks={mainLinks} />
    </BrowserRouter>
  );
  mainLinks.forEach((link) => {
    if (!link.links) {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    }
  });
});
