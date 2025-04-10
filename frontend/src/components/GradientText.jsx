export default function GradientText({ text }) {
    return (
        <h2 className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent
        text-3xl md:text-6xl font-bold mb-14 text-center leading-relaxed">
            {text}
        </h2>
    );
}