import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {CodeEditor} from './components/CodeEditor.jsx';
import LandingPage from "./components/LandingPage.jsx";

function App() {
    return (
        <Router>
            <div>
                <a 
                    href="https://github.com/Abhiboss07/Ez-Lang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '10px',
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: '#333',
                        borderRadius: '5px'
                    }}
                >
                    View NativeCode on GitHub
                </a>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/editor" element={<CodeEditor/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;