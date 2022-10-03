import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Main from "../Components/Main/Main"
import Projects from "../Components/Projects/Projects"
import Snake from "../Components/Snake/Snake"
import { useEffect, useRef, useState } from "react"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import projects from "../projects.json"
import ReactTooltip from "react-tooltip"


function Home() {
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
            <Contact />
            <Footer />
            { 
                width >= 600 ? <Snake width={width} height={height} heroHeight={heroHeight} heroWidth={heroWidth}/> : null
            }
            <ReactTooltip place="top" type="dark" effect="solid" />
            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                newestOnTop={false}
                closeOnClick
                draggable
                theme='light'
            />
        </div>
    )
}

export default Home
