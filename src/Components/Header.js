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

import {useState} from 'react'

const Header = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false)

    const topLinks = [
        { name: 'Menu', url: '#' },
        { name: 'Some text', url: '#' },
        { name: 'Another item', url: '#' },
        { name: 'One more', url: '#' },
        { name: 'And last one', url: '#' }
    ]

    const mainLinks = [
        { name: 'Home', url: '#' },
        { name: 'Service', url: '#' },
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
        { name: 'About me', url: '#' },
        { name: 'Contact', url: '#' }
    ]

    const MobileGroupList = ({title, links}) => {
        const [isOpen, setIsOpen] = useState(false)

        return (
            <div className={mobileMenuView}>
                <span onClick={() => setIsOpen(!isOpen)}>{title}</span>
                <div className={`${isOpen ? '' : 'hidden '}`}>
                    {links.map((innerLink, v) => <a key={v} href={innerLink.url}>{innerLink.name}</a>)}
                </div>
            </div>
        )
    }

    return (
        <header>
            <div className="bg-primary">
                <div className={`container ${header}`}>
                    <div className={headerTop}>
                        {topLinks.map((link, k) => <a key={k} href={link.url}>{link.name}</a>)}
                    </div>
                    <div className={`flex flex-row justify-between items-center`}>
                        <div className="flex">
                            <img src={process.env.PUBLIC_URL + '/DEMOSITE.svg'} alt="demosite logo" />
                        </div>
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
                                            {link.links.map((l, k) => <a key={k} href={l.url}>{l.name}</a>)}
                                        </div>
                                    </div>
                                </div>
                                :
                                <a key={key} href={link.url}>{link.name}</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileMenuState ? '' : 'hidden '} ${mobileMenu}`}>
                {mainLinks.map((link, key) => link.links ? 
                    <MobileGroupList key={key} title={link.name} links={link.links} />
                :
                    <a key={key} href={link.url}>{link.name}</a>
                )}
            </div>
        </header>
    )
}

export default Header;