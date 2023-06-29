const Button = ({handleClick, name}) => <button onClick={() => {handleClick(name)}}>{name}</button>
export default Button