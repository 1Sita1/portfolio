import { Project as TProject } from '../../Types/Types'
import Project from '../Project/Project'
import './_projects.scss'


type ProjectsProps = {
    projects: TProject[]
}

const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {

    return (
        <section className='text-center projects-section'>
            <div className='projects-background'>
                <div className='shape shape1'></div>
                <div className='shape shape2'></div>
                <div className='shape shape3'></div>
                <div className='shape shape4'></div>
                <div className='shape shape5'></div>
                <div className='shape shape2' style={{left: "70%", top: "90%", transform: "rotate(-42deg)"}}></div>
                <div className='shape shape3' style={{left: "80%", top: "72%", transform: "rotate(12deg)"}}></div>
                <div className='shape shape4' style={{left: "20%", top: "44%", transform: "rotate(115deg)"}}></div>
                <div className='shape shape5' style={{left: "15%", top: "69%", transform: "rotate(12deg)"}}></div>
                <div className='shape shape1' style={{left: "70%", top: "24%", transform: "rotate(-12deg)"}}></div>
                <div className='shape shape2' style={{left: "10%", top: "87%", transform: "rotate(191deg)"}}></div>
                <div className='shape shape3' style={{left: "30%", top: "15%", transform: "rotate(125deg)"}}></div>
                <div className='shape shape5' style={{left: "80%", top: "28%", transform: "rotate(112deg)"}}></div>
            </div>
            <div className='projects-foreground central-scope'>
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