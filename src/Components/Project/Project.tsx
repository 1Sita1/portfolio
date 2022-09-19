import { Project as TProject } from "../../Types/Types"
import Technology from "../Technology/Technology"
import { FlipCard } from 'react-flipme'
import "./_project.scss"

const Project: React.FC<TProject> = (project: TProject) => {

    return (
        <FlipCard width="350px" height="250px" className={"project"}>
            <FlipCard.Front>
                <div className="project-front">
                    <img className="project-img" src={project.img} />
                    <h4>{project.header}</h4>
                </div>
            </FlipCard.Front>
            <FlipCard.Back>
                <div className="project-back">
                    <h4>Project Title</h4>
                    <div>
                        {
                            project.technologies.map((technology, id) => {
                                return <Technology {...technology} key={id} />
                            })
                        }
                    </div>
                    <div>
                        <a href={project.link} target="_blank" className="github-link">
                            <span>Github</span> 
                            <img src="/Img/github.png" width="16px" height="16px"></img>
                        </a>
                    </div>
                </div>
            </FlipCard.Back>
        </FlipCard>
    )
}

export default Project