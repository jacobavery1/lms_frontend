import { useSelector, useDispatch } from "react-redux"
import { logout } from "../store/reducers"
import { Button, Card } from "react-bootstrap"
import {useNavigate} from "react-router-dom"


export default function Account() {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function logoutUser() {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <>
            <Card className="mx-auto" style={{width: '20rem', marginTop: 100, marginBottom: 100, textAlign: 'center'}}>
                <Card.Body>
                    <p><span style={{fontWeight: 500}}>Name: </span>{user.firstname} {user.lastname}</p>
                    <p><span style={{fontWeight: 500}}>Username: </span>{user.username}</p>
                    <Button onClick={logoutUser}>Logout</Button>
                </Card.Body>
            </Card> 
        </>
    )
}