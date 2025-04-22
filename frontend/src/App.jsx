import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';

export default function App() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('fr');

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
  return (
    <div id="about" className="py-8">
      <NavBar toggleLanguage={toggleLanguage} currentLang={currentLang}/>
      <About />
      <hr id="skills" className="border-gray-800 dark:border-white/30" />
      <Skills />
      <hr id="projects" className="border-gray-800 dark:border-white/30" />
      <Projects />
      <hr id="games" className="border-gray-800 dark:border-white/30" />
      <Games />
      <hr id="contact" className="border-gray-800 dark:border-white/30" />
      <Contact />
      <footer className="text-center text-gray-500 dark:text-white/50 mt-10">
        <p>{t("footer.rights")}</p>
        <p>{t("footer.madeWith")}</p>
        </footer>
    </div>
  );
}