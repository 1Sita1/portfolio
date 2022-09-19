import { Technology as TTechnology } from "../../Types/Types"
import ReactTooltip from "react-tooltip"
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
            <ReactTooltip place="top" type="dark" effect="solid" />
        </a>
    )
}

export default Technology
