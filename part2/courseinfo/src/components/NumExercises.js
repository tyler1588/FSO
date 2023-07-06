const NumExercises = ({courseParts}) => {
	const total = courseParts.reduce((sum, curr) => sum + curr.exercises, 0)
	return (
		<strong>Total of {total} exercises</strong>
	)
}

export default NumExercises