import About from "./Components/About/About"
import Main from "./Components/Main/Main"
import Projects from "./Components/Projects/Projects"

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
    return (
        <div className="darkTheme">
            <Main />
            <Projects projects={projects} />
        </div>
    )
}

export default App
