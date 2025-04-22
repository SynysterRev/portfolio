import GradientText from "./GradientText";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import withTranslation from "./TranslatedComponent";

const Contact = ({ t }) => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_i4iciw7', 'template_09pp1xq', form.current, {
                publicKey: 'sSfMjbBPvjoH4e4dU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                    form.current.reset();
                    setTimeout(() => setIsSubmitted(false), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsError(true);
                    setTimeout(() => setIsError(false), 5000);
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };
    return <div className="mt-30 mb-20 flex flex-col justify-center items-center">
        <GradientText text="Contact" />
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
            {isSubmitted && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {t("contact.messageSend")}
                </div>
            )}
            <div className="flex flex-col items-center">
                <label htmlFor="name" className="block text-gray-700 dark:text-white mb-2 w-full">
                {t("contact.name")}:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-12"
                    placeholder={t("contact.enterName")}
                />
                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-2 w-full">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-12"
                    placeholder={t("contact.enterEmail")}
                />
                <label htmlFor="message" className="block text-gray-700 dark:text-white mb-2 w-full">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-12"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`cursor-pointer relative inline-block px-8 py-3 rounded-full 
        text-white font-bold text-lg uppercase tracking-wider no-underline 
        transition-all duration-300 hover:shadow-[0_0_30px] hover:shadow-pink-500/80
        ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-pink-500"></span>
                    <span className="absolute inset-[1px] rounded-full bg-gray-900"></span>
                    <span className="relative flex items-center gap-2">
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t("contact.sending")}
                            </>
                        ) : t("contact.send")}
                    </span>
                </button>
            </div>
        </form>
    </div>;
}

export default withTranslation(Contact);