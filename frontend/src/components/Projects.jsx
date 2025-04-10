import { projects } from '../data/projects';
import Project from './Project';
import GradientText from "./GradientText";

export default function Projects() {
    return (
        <div className="container mx-auto px-4 mt-30 mb-20">
            <GradientText text="My Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}