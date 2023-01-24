import { useEffect, useState } from "react"
import { ButtonGroup, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as services from '../services/services'
import {MdAssignment, MdViewModule, MdOutlineAnnouncement} from 'react-icons/md'

export default function Courses() {
    const user = useSelector(state => state.user.value)

    const navigate = useNavigate()

    const [courses, setCourses] = useState([])

    useEffect(() => {
        // takes user from home page (Courses) to login if user is not logged in
        if (!user.token.length > 0) {
            navigate("/login")
        }

        services.getCourses(user).then(values => {
            setCourses(values)
        })
        
    })
    
    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 30}}>
                {courses?.map(course => (
                    <>
                    <Card style={{width: 400, textAlign: 'center'}}>
                        <Card.Header style={{cursor: 'pointer'}} onClick={() => navigate(`/course/${course._id}/home`)}>{course.course_name}</Card.Header>
                        <Card.Body>
                            <ButtonGroup>
                                <Button 
                                    variant="secondary"
                                    onClick={() => navigate(`/course/${course._id}/announcements`)}
                                >
                                    <MdOutlineAnnouncement />
                                </Button>
                                <Button 
                                    variant="secondary"
                                    onClick={() => navigate(`/course/${course._id}/modules`)}
                                >
                                    <MdViewModule />
                                </Button>
                                <Button 
                                    variant="secondary"
                                    onClick={() => navigate(`/course/${course._id}/assignments`)}
                                >
                                    <MdAssignment />
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                    </>
                ))}
            </div>
        </>
    )
}