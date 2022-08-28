import { type } from "@testing-library/user-event/dist/type";
import { FunctionComponent } from "react";
import './_main.scss'

type MainProps = {

}

const Main: React.FC = () => {

    return (
        <section className="fullscreen main-section">
            <article>
                <h1>Hi</h1>
                <h2>I am Arsenii</h2>
                <h2>And I love Web</h2>
            </article>
            <article>
                <figure className="bitmoji-container">
                    <img src="/Img/bitmoji.png"></img>
                </figure>
            </article>
        </section>
    )
}

export default Main