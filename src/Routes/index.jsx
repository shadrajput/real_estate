import { Navigate, Route, Routes, BrowserRouter, } from 'react-router-dom'
import Home from '../Pages'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes


