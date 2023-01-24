import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Login from './pages/Login'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Account from './pages/Account'
import Modules from './pages/Modules'


function App() {
    const navigate = useNavigate()

    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/" style={{fontWeight: 600}}>
                        LMS
                    </Navbar.Brand>
                    <Nav>
                    {
                        !(user.token.length > 0) ? (
                            <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link>Register</Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link href="/account">Account</Nav.Link>
                            <Nav.Link href="/">Courses</Nav.Link>
                            <Nav.Link>Assignments</Nav.Link>
                            </>
                        )
                    }
                    </Nav>
                </Container>
            </Navbar>


            <div style={{margin: 25}}>
            <Routes>
                <Route path="/" element={<Courses />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/course/:id/home" element={<Course activeKey="home" />} />
                <Route path="/course/:id/modules" element={<Course activeKey="modules" />} />
                <Route path="/course/:id/assignments" element={<Course activeKey="assignments" />} />
                <Route path="/course/:id/announcements" element={<Course activeKey="announcements" />} />
            </Routes>
            </div>
        </>
    )
}

export default App