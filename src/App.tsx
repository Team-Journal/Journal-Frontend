import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Community from './pages/community';
import Introduce from './pages/introduce';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Introduce />}></Route>
                <Route path="/community" element={<Community />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;