import Part from './Part'

const Content = ({courseParts}) => {
	const parts = courseParts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
	return (
		<> 
		{parts}
		</>
	)
}

export default Content