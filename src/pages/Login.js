import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form, Alert, Button, Card } from 'react-bootstrap'
import * as services from "../services/services"
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/reducers'


function ValidateAlert({children}) {
    return <Alert variant="danger">{children}</Alert>
}

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const user = useSelector(state => state.user.value)

    const formik = useFormik({
        initialValues: {
            username: '', 
            password: '', 
            role: ''
        }, 
        validationSchema: Yup.object({
            username: Yup.string().required("Please enter username"), 
            password: Yup.string().required("Please enter password"), 
            role: Yup.string().required("Please enter a role")
        }), 
        onSubmit: (values, { resetForm }) => {
            services.login(values.username, values.password, values.role).then(value => {
                if (value.token != null && value.token.length > 0) {
                    dispatch(setUser(value))
                    navigate("/")
                } else {
                    alert("Incorrect username or password")
                }
            })
        }
    })
    
    return (
        <>
            <Card className="mx-auto" style={{width: '20rem', marginTop: 100, marginBottom: 100}}>
            <Card.Body>
                <h2>Login</h2>
            <Form onSubmit={formik.handleSubmit}>
                <br />
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        {...formik.getFieldProps("username")}
                    />
                </Form.Group>
                {formik.touched.username && formik.errors.username && (
                    <ValidateAlert>{formik.errors.username}</ValidateAlert>
                )}
                <br />
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        {...formik.getFieldProps("password")}
                    />
                </Form.Group>
                {formik.touched.password && formik.errors.password && (
                    <ValidateAlert>{formik.errors.password}</ValidateAlert>
                )}
                <br />
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                        id="role"
                        {...formik.getFieldProps("role")}
                    >
                        <option>Select role</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>
                {formik.touched.role && formik.errors.role && (
                    <ValidateAlert>{formik.errors.role}</ValidateAlert>
                )}
                <br />
                <Button type="submit">Submit</Button>
            </Form>
            </Card.Body>
            </Card>
        </>
    )
}