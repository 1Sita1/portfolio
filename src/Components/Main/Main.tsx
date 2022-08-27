import { type } from "@testing-library/user-event/dist/type";
import { FunctionComponent } from "react";

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
                <div style={{height: "400px", width: "400px", backgroundColor: "brown"}}></div>
            </article>
        </section>
    )
}

export default Main