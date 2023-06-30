import Header from './Header'
import Content from './Content'
import NumExercises from './NumExercises'

const Course = ({course}) => {
    return (
        <div>
          <Header name={course.name}/>
          <Content courseParts={course.parts}/>
          <NumExercises courseParts={course.parts}/>
        </div>
      )
}

export default Course