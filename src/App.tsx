import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Community from './pages/community';
import Introduce from './pages/introduce';
import Login from './pages/login';
import Register from './pages/register';
import Search from './pages/search';
import Signup from './pages/signup';
import WritePost from './pages/write';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Introduce />}></Route>
                <Route path="/community" element={<Community />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/post" element={<WritePost />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;