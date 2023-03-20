import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Introduce from './pages/introduce';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Introduce />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;