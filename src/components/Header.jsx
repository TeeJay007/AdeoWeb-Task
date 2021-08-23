import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  menuBtn,
  header,
  menu,
  hoverMenu,
  menuItem,
  hoverTriangle,
  hoverLinks,
  headerTop,
  mobileMenu,
  mobileMenuView,
} from './Header.module.scss';

const Header = ({ mainLinks, topLinks }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const MobileGroupList = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className={mobileMenuView}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {title}
        </button>
        <div className={`${isOpen ? '' : 'hidden '}`}>
          {links.map((innerLink) => (
            <Link
              onClick={() => setMobileMenuState(false)}
              key={innerLink.id}
              to={innerLink.url}
            >
              {innerLink.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  MobileGroupList.propTypes = {
    title: PropTypes.string,
    links: PropTypes.arrayOf(String),
  };

  MobileGroupList.defaultProps = {
    title: '',
    links: [],
  };

  return (
    <header>
      <nav className="bg-primary">
        <div className={`container ${header}`}>
          <div className={headerTop}>
            {topLinks.map((link) => (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center">
            <Link to="/" className="flex">
              <img
                src={`${process.env.PUBLIC_URL}/DEMOSITE.svg`}
                alt="demosite logo"
              />
            </Link>
            <button
              type="button"
              className={menuBtn}
              onClick={() => setMobileMenuState(!mobileMenuState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={menu}>
              {mainLinks.map((link) =>
                link.links ? (
                  <div className={menuItem} key={link.id}>
                    <span>{link.name}</span>
                    <div className={hoverMenu}>
                      <div className={hoverTriangle} />
                      <div className={hoverLinks}>
                        {link.links.map((l) => (
                          <Link to={l.url} key={l.id} href={l.url}>
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.id} to={link.url}>
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={`${mobileMenuState ? '' : 'hidden '} ${mobileMenu}`}>
        {mainLinks.map((link) =>
          link.links ? (
            <MobileGroupList
              key={link.id}
              title={link.name}
              links={link.links}
            />
          ) : (
            <Link
              onClick={() => setMobileMenuState(false)}
              key={link.id}
              to={link.url}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  mainLinks: PropTypes.arrayOf(String),
  topLinks: PropTypes.arrayOf(String),
};

Header.defaultProps = {
  mainLinks: [],
  topLinks: [],
};

export default Header;
