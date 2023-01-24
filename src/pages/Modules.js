
export default function Modules({course}) {
    return (
        <div>
            {
                course ? 
                course.modules.map(module => (
                    <>
                    <p>{module.module_name}</p>
                    {module.assignments.map(assignment => (
                        <h4>{assignment.assignment_name}</h4>
                    ))}
                    </>
                )) : (
                    <>
                        No course content
                    </>
                )
            }
        </div>
    )
}