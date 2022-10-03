import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./Pages/Home"


function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Square_game/index.html' />
            </Routes>
        </Router>
    )
}

export default App
