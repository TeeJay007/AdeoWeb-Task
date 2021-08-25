import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

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

test('Check header links', async () => {
  render(
    <BrowserRouter>
      <Header mainLinks={mainLinks} topLinks={topLinks} />
    </BrowserRouter>
  );
  mainLinks.forEach((link) => {
    if (!link.links) {
      const anchor = screen.getAllByText(link.name);
      if (Array.isArray(anchor)) {
        anchor.forEach((a) => expect(a).toBeInTheDocument());
      } else {
        expect(anchor).toBeInTheDocument();
      }
    } else {
      link.links.forEach((l) => {
        const anchor = screen.getAllByText(l.name);
        if (Array.isArray(anchor)) {
          anchor.forEach((a) => expect(a).toBeInTheDocument());
        } else {
          expect(anchor).toBeInTheDocument();
        }
      });
    }
  });
  topLinks.forEach((link) => {
    expect(screen.getByText(link.name)).toBeInTheDocument();
  });
});
