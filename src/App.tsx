import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Community from './pages/community';
import Introduce from './pages/introduce';
import Signup from './pages/signup';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Introduce />}></Route>
                <Route path="/community" element={<Community />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;