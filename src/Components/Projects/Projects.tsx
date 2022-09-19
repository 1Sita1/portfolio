import { Project as TProject } from '../../Types/Types'
import Project from '../Project/Project'
import './_projects.scss'


type ProjectsProps = {
    projects: TProject[]
}

const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {

    return (
        <section className='central-scope text-center projects-section'>
            <h3>My projects</h3>
            <div className='projects-container'>
                {
                    props.projects.map((project, index) => {
                        return <Project {...project} key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects