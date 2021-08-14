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
    mobileMenuView
} from './Header.module.scss'

import {
    Link
} from "react-router-dom";

import {useState} from 'react'

const Header = ({mainLinks = [], topLinks = []}) => {
    const [mobileMenuState, setMobileMenuState] = useState(false)

    const MobileGroupList = ({title, links}) => {
        const [isOpen, setIsOpen] = useState(false)

        return (
            <div className={mobileMenuView}>
                <span onClick={() => setIsOpen(!isOpen)}>{title}</span>
                <div className={`${isOpen ? '' : 'hidden '}`}>
                    {links.map((innerLink, v) => <Link onClick={() => setMobileMenuState(false)} key={v} to={innerLink.url}>{innerLink.name}</Link>)}
                </div>
            </div>
        )
    }

    return (
        <header>
            <nav className="bg-primary">
                <div className={`container ${header}`}>
                    <div className={headerTop}>
                        {topLinks.map((link, k) => <Link key={k} to={link.url}>{link.name}</Link>)}
                    </div>
                    <div className={`flex flex-row justify-between items-center`}>
                        <Link to='/' className="flex">
                            <img src={process.env.PUBLIC_URL + '/DEMOSITE.svg'} alt="demosite logo" />
                        </Link>
                        <div className={menuBtn} onClick={() => setMobileMenuState(!mobileMenuState)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={menu}>
                            {mainLinks.map((link, key) => link.links ?
                                <div className={menuItem} key={key}>
                                    <span>{link.name}</span>
                                    <div className={hoverMenu}>
                                        <div className={hoverTriangle}></div>
                                        <div className={hoverLinks}>
                                            {link.links.map((l, k) => <Link to={l.url} key={k} href={l.url}>{l.name}</Link>)}
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link key={key} to={link.url}>{link.name}</Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`${mobileMenuState ? '' : 'hidden '} ${mobileMenu}`}>
                {mainLinks.map((link, key) => link.links ? 
                    <MobileGroupList key={key} title={link.name} links={link.links} />
                :
                    <Link onClick={() => setMobileMenuState(false)} key={key} to={link.url}>{link.name}</Link>
                )}
            </div>
        </header>
    )
}

export default Header;