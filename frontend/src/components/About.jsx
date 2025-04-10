import Link from "./Link";

export default function About() {
    return (
        <section id="hero" className="h-screen flex items-center justify-center text-center bg-gradient-br p-6">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4
                    bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Backend Developer
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                    Hello there! I'm Michaël, I've worked in the video game industry for the past 4 years.<br />
                    I'm now transitioning to backend development, and I'm excited to share my journey with you.<br />

                </p>
                <Link linkText={"View my work"} href={"#projects"} />
            </div>
        </section>
    );
}