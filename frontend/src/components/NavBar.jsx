import Hamburger from "./Hamburger";
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react';
import withTranslation from './TranslatedComponent';

const NavBar = ({ t, toggleLanguage, currentLang }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
    const [activeSection, setActiveSection] = useState('about');
    const sections = ['about', 'skills', 'projects', 'games', 'contact'];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
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

        // Throttle to limit the number of scroll events
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

    const renderNavButton = (section) => (
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
    );

    return (
        <div className="fixed z-50 top-0 left-0 right-0 mt-8">
            <nav className="mx-auto max-w-7xl border rounded-lg border-white/40 bg-gray-900/80 mx-2">
                <div className="flex gap-2 p-4 justify-between items-center">
                    <h2 className="text-white font-bold text-xl sm:text-2xl">Michaël</h2>

                    <div className="flex-1 flex justify-center">
                        {!isMobile && (
                            <div className="flex gap-5">
                                {sections.map(renderNavButton)}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/SynysterRev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/michael-arn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                        <button
                            onClick={toggleLanguage}
                            className="z-50 px-2 py-1 text-sm sm:text-base sm:px-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                        >
                            {currentLang.toUpperCase()}
                        </button>
                        {isMobile && <Hamburger />}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withTranslation(NavBar);