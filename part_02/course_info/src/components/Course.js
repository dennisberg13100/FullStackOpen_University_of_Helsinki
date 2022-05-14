import React from "react"

const Course = ({course}) => {
    
    const { parts, name  } = course
    const total = parts.reduce((x, y) => x + y.exercises, 0);

    return (
        <div>
            <h1>{course.name}</h1>
            {parts.map((part) => 
                <Part key={part.id} 
                      name={part.name} 
                      exercises={part.exercises} 
                />
            ) }
            <Total total={total}/>  
        </div>
    )
}

const Part = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({total}) => { 
    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Course