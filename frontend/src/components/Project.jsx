import withTranslation from "./TranslatedComponent";

const Project = ({ t, project }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700">
            {project.image && (
                <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
            )}
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4">{t(`projects.${project.translationKey}`)}</p>
                {project.technologies && (
                    <p className="text-gray-400 text-sm mb-4">
                        Technologies: {project.technologies}
                    </p>
                )}
                <div className="flex gap-4">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 transition-colors"
                        >
                            {project.live_url_text}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withTranslation(Project);