import { Project as TProject } from '../../Types/Types'
import Project from '../Project/Project'
import './_projects.scss'


type ProjectsProps = {
    projects: TProject[]
}

const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {

    return (
        <section className='central-scope text-center projects-section'>
            <div className='projects-background'>
                <div className='shape shape1'></div>
                <div className='shape shape2'></div>
                <div className='shape shape3'></div>
                <div className='shape shape4'></div>
                <div className='shape shape5'></div>
                <div className='shape shape2' style={{left: "-20%", top: "40%", transform: "rotate(-42deg)"}}></div>
                <div className='shape shape3' style={{left: "80%", top: "60%", transform: "rotate(12deg)"}}></div>
                <div className='shape shape4' style={{left: "100%", top: "40%", transform: "rotate(115deg)"}}></div>
                <div className='shape shape5' style={{left: "110%", top: "6%", transform: "rotate(12deg)"}}></div>
            </div>
            <div className='projects-foreground'>
                <h3 className='z20 projects-header'>My projects</h3>
                <div className='projects-container'>
                    {
                        props.projects.map((project, index) => {
                            return <Project {...project} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects