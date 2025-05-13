import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import withTranslation from './TranslatedComponent';
import '../Hamburger.css'; 

const Hamburger = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <Menu 
            right 
            isOpen={isOpen}
            onStateChange={handleStateChange}
        >
            {['about', 'skills', 'projects', 'games', 'contact'].map((section) => (
                <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="menu-item" >
                    {t(`nav.${section}`)}
                </button>
            ))}
        </Menu>
    );
}

export default withTranslation(Hamburger);