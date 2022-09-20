import About from "./Components/About/About"
import Main from "./Components/Main/Main"
import Projects from "./Components/Projects/Projects"
import Sketch from "react-p5";
import { useEffect, useRef, useState } from "react";

const projects = [
    {
        header: "Interesting Places",
        img: "/Img/Projects/Interesting_Places.png",
        body: "test",
        link: "https://github.com",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            }
        ]
    },
    {
        header: "Interesting Places",
        img: "/Img/Projects/Interesting_Places.png",
        body: "test",
        link: "https://github.com",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            }
        ]
    },
    {
        header: "Interesting Places",
        img: "/Img/Projects/Interesting_Places.png",
        body: "test",
        link: "https://github.com",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            }
        ]
    },
    {
        header: "Interesting Places",
        img: "/Img/Projects/Interesting_Places.png",
        body: "test",
        link: "https://github.com",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            }
        ]
    },
]

function App() {
    const [width, setWidth] = useState<number>(100)
    const appRef = useRef<HTMLHeadingElement>(null)
    
    useEffect(() => {
        setWidth(appRef.current?.clientWidth ?? 0)
    })
    console.log(width)
    return (
        <div className="darkTheme" ref={appRef}>
            <Main />
            <Projects projects={projects} />
            <div>{}</div>
            <div className="p5-container">
                { 
                    width > 100 ?? <Sketch setup={(p5, canvasParentRef) => {
                        p5.createCanvas(width, appRef?.current?.clientHeight ?? 100).parent(canvasParentRef);
                        p5.background(0)
                    }} draw={(p5) => { 
                    }} />
                }
            </div>
        </div>
    )
}

export default App
