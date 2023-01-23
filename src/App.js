import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Login from './pages/Login'


function App() {
    const navigate = useNavigate()

    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    
    return (
        <>

            <div style={{margin: 25}}>
            <Routes>
                
                <Route path="/" element={<Login />} />
                
            </Routes>
            </div>
        </>
    )
}

export default App