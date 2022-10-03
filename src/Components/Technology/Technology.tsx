import { Technology as TTechnology } from "../../Types/Types"
import "./_technology.scss"

const Technology: React.FC<TTechnology> = (props: TTechnology) => {
    return (
        <a href={props.origin} target={"_blank"} className="technology-wrapper">
            <img
                className="technology"
                data-tip={props.name}
                src={props.img}
                alt={props.name}
            />
        </a>
    )
}

export default Technology
