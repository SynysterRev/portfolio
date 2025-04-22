import Hamburger from "./Hamburger";
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react';
import withTranslation from './TranslatedComponent';

const NavBar = ({ t, toggleLanguage, currentLang }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [activeSection, setActiveSection] = useState('about');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'games', 'contact'];

            let closest = null;
            let closestDistance = Infinity;

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closest = sectionId;
                    }
                }
            });

            if (closest) {
                setActiveSection(closest);
            }
        };

        let timeoutId;
        const throttledScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', throttledScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="fixed z-50 top-0 left-0 right-0 mx-4 backdrop-blur-sm mt-8">
            <nav className="mx-auto max-w-7xl border rounded-lg border-white/40 bg-gray-900/80">
                <div className="flex gap-4 p-4 justify-between items-center">
                    <h2 className="text-white font-bold text-2xl">Michaël</h2>
                    <div className="flex-1 flex justify-center">
                        {isMobile ? (
                            <Hamburger />
                        ) : (
                            <div className="flex gap-5">
                                {['about', 'skills', 'projects', 'games', 'contact'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`text-xl cursor-pointer transition-all duration-300 ${activeSection === section
                                            ? 'bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent font-bold scale-110'
                                            : 'text-white hover:text-gray-300'
                                            }`}
                                    >
                                        {t(`nav.${section}`)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleLanguage}
                        className="z-50 px-3 py-1 rounded-full bg-gray-800 text-white"
                    >
                        {currentLang.toUpperCase()}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default withTranslation(NavBar);