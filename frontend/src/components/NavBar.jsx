import Hamburger from "./Hamburger";
import { useMediaQuery } from 'react-responsive'

export default function NavBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="fixed z-50 top-0 left-0 right-0 mx-30 backdrop-blur-sm mt-8 border rounded-lg border-white/40">
            <nav className="flex gap-4 p-4 z-0 justify-between items-center">
                <h2 className="text-white font-bold text-2xl">Michaël</h2>
                <div className="flex-1 flex justify-center">
                    {isMobile ?
                        (<Hamburger />)
                        :
                        (<div className="flex gap-5">
                            <button onClick={() => scrollToSection('home')} className="text-white text-xl cursor-pointer">Home</button>
                            <button onClick={() => scrollToSection('skills')} className="text-white text-xl cursor-pointer">Skills</button>
                            <button onClick={() => scrollToSection('projects')} className="text-white text-xl cursor-pointer">Projets</button>
                            <button onClick={() => scrollToSection('games')} className="text-white text-xl cursor-pointer">Games</button>
                            <button onClick={() => scrollToSection('contact')} className="text-white text-xl cursor-pointer">Contact</button>
                        </div>)
                    }
                </div>
            </nav>
        </div>
    );
}