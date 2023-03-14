import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Blink from "./Pages/Blink/Blink"

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blink' element={<Blink />}/>
                <Route path='/Projects/Square_game/index.html' />
            </Routes>
        </Router>
    )
}

export default App
