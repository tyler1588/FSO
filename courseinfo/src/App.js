const Header = props => <h1>{props.course.name}</h1>
const Part = props => <p>{props.part.name} {props.part.exercises}</p>
const TotalParts = props => {
	let total = 0
	props.course.parts.forEach(part => total += part.exercises)
	return (
		<p>Number of Exercises {total}</p>
	)
}
const Content = props => {
	const parts = props.course.parts.map((part, i) => <Part key={i} part={part}/>)
	return (
		<> 
		{parts}
		</>
	)
}

const App = () => {
	const course = 
	{
		name: 'Half Stack application development',
		parts: [
			{name: 'Fundamentals of React', exercises: 10},
			{name: 'Using props to pass data', exercises: 7},
			{name: 'State of a component', exercises: 14}
		]
	}
  
	return (
	  <div>
		<Header course={course} />
		<Content course={course} />
		<TotalParts course={course} />
	  </div>
	)
  }
  
  export default App
