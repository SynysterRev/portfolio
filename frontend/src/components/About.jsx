import Link from "./Link";
import withTranslation from './TranslatedComponent';

const About = ({t}) => {
    return (
        <section id="hero" className="h-screen flex items-center justify-center text-center bg-gradient-br p-6">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8
                    bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Gameplay Programmer/Backend Developer
                </h1>
                <div className="text-xl md:text-2xl text-white mb-8 space-y-4">
                    {t('about', { returnObjects: true }).map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <Link linkText={t('work')} href={"#projects"} />
            </div>
        </section>
    );
}

export default withTranslation(About);