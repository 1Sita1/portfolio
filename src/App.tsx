import About from "./Components/About/About"
import Main from "./Components/Main/Main"
import Projects from "./Components/Projects/Projects"
import Snake from "./Components/Snake/Snake";
import { useEffect, useRef, useState } from "react";

const projects = [
    {
        header: "PlacesShare",
        img: "/Img/Projects/Interesting_Places.png",
        body: "test",
        link: "https://placesshare.com",
        source: "https://github.com/1Sita1/places",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            },
            {
                name: "JS",
                img: "/Img/Technologies/js.png",
                origin: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                name: "Bootstrap",
                img: "/Img/Technologies/bt.png",
                origin: "https://getbootstrap.com/"
            },
            {
                name: "Express",
                img: "/Img/Technologies/ex.png",
                origin: "https://expressjs.com/"
            },
            {
                name: "Mongo db (mongoose)",
                img: "/Img/Technologies/mdb.png",
                origin: "https://www.mongodb.com/"
            },
            {
                name: "JWT",
                img: "/Img/Technologies/jwt.jpg",
                origin: "https://jwt.io/" 
            },
            {
                name: "Jest (backend)",
                img: "/Img/Technologies/jest.png",
                origin: "https://jestjs.io/"
            }
        ]
    },
    {
        header: "React-flipme",
        img: "/Img/Projects/flip.gif",
        body: "test",
        link: "https://github.com/1Sita1/react-flipme",
        source: "https://github.com/1Sita1/react-flipme",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            },
            {
                name: "Typescript",
                img: "/Img/Technologies/ts.jpg",
                origin: "https://www.typescriptlang.org/"
            },
            {
                name: "Styled components",
                img: "/Img/Technologies/sc.png",
                origin: "https://styled-components.com/"
            }
        ]
    },
    {
        header: "This portfolio",
        img: "/Img/Projects/pf.jpg",
        body: "test",
        link: "https://arsenii.dev",
        source: "https://github.com/1Sita1/portfolio",
        technologies: [
            {
                name: "React",
                img: "/Img/Technologies/React.png",
                origin: "https://reactjs.org/"
            },
            {
                name: "Typescript",
                img: "/Img/Technologies/ts.jpg",
                origin: "https://www.typescriptlang.org/"
            },
            {
                name: "Sass",
                img: "/Img/Technologies/sass.jpg",
                origin: "https://sass-lang.com/"
            },
            {
                name: "p5js",
                img: "/Img/Technologies/p5.png",
                origin: "https://p5js.org/"
            }
        ]
    },
    {
        header: "Square game",
        img: "/Img/Projects/square.png",
        body: "test",
        link: "#",
        source: "https://github.com/1Sita1/Squares",
        technologies: [
            {
                name: "JS",
                img: "/Img/Technologies/js.png",
                origin: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                name: "p5js",
                img: "/Img/Technologies/p5.png",
                origin: "https://p5js.org/"
            }
        ]
    },
]


function App() {
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const [heroWidth, setHeroWidth] = useState<number>(0)
    const [heroHeight, setHeroHeight] = useState<number>(0)
    const appRef = useRef<HTMLHeadingElement>(null)
    const heroRef = useRef<HTMLHeadingElement>(null)
    
    useEffect(() => {
        setWidth(appRef.current?.clientWidth ?? 0)
        setHeight(appRef.current?.clientHeight ?? 0)
        setHeroHeight(heroRef.current?.clientHeight ?? 0)
        setHeroWidth(heroRef.current?.clientWidth ?? 0)
    })


    return (
        <div className="darkTheme app" ref={appRef}>
            <Main ref={heroRef}/>
            <Projects projects={projects} />
            { 
                width >= 600 ? <Snake width={width} height={height} heroHeight={heroHeight} heroWidth={heroWidth}/> : null
            }
        </div>
    )
}

export default App
