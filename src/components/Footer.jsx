import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  footer,
  footerTop,
  footerLinks,
  copyright,
} from './Footer.module.scss';

const Footer = ({ mainLinks = [] }) => (
  <footer className={footer}>
    <div>
      <div className={footerTop}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className={footerLinks}>
          <div>
            {mainLinks.map((link) => (
              <Link key={link.id} to={link.url || '/'}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={copyright}>
        <span>&copy;</span>
        <img src="/DEMOSITE.svg" alt="logo" />
        <span>All rights reserved</span>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  mainLinks: PropTypes.arrayOf(String),
};

Footer.defaultProps = {
  mainLinks: [],
};

export default Footer;
