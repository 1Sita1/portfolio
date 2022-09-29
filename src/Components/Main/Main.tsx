import { SelectorMatcherOptions } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import { FunctionComponent } from "react";
import React from "react";
import './_main.scss'

type MainProps = {

}

const Main = React.forwardRef<HTMLDivElement, MainProps>((props: MainProps, ref) => {

    return (
        <section className="fullscreen main-section" ref={ref}>
            <article className="z20">
                <h1>Hi!</h1>
                <h2>I am Arsenii</h2>
                <h2>And I love Web</h2>
            </article>
            <article className="z20">
                <figure className="bitmoji-container">
                    <img src="/Img/bitmoji.png"></img>
                </figure>
            </article>
        </section>
    )
})

export default Main