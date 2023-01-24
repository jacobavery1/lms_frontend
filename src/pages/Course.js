import { useEffect, useState } from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import * as services from '../services/services'
import { Tabs, Tab } from "react-bootstrap"
import Modules from "./Modules"


export default function Course({activeKey}) {

    const { id } = useParams()
    const navigate = useNavigate()

    const user = useSelector(state => state.user.value)

    const [homepage, setHomepage] = useState()
    const [course, setCourse] = useState()

    const [key, setKey] = useState(activeKey)

    useEffect(() => {
        services.getCourse(user, id).then(result => {
            setHomepage(result.course_home_html)
            setCourse(result)
        })
    })

    return (
        <>
            <h3>{course?.course_name}</h3>
            <br />
            <Tabs
                defaultActiveKey={key}
                onSelect={(k) => navigate(`/course/${course._id}/${k}`)}
            >
                <Tab eventKey="home" title="Course Home">
                    <div style={{margin: 25}} dangerouslySetInnerHTML={{ __html: homepage }} />
                </Tab>
                <Tab eventKey="modules" title="Modules">
                    <Modules course={course} />
                </Tab>
                <Tab eventKey="assignments" title="Assignments">

                </Tab>
                <Tab eventKey="announcements" title="Announcements">

                </Tab>

            </Tabs>
            
        </>
    )
}