const GreetingMessage = (props) => {
    console.log(props)
    return (
        <div id="greeting">
            Hello, {props.name}. {props.message}
        </div>
    )
}

const Car = (props) => {
    return (
        <div className="car">
           <h3>{props.type}</h3> 
           <p>${props.price}</p>
        </div>
    )
}

const Props = () => {
    return (
        <div className="section">
            <h2>Basic Properties(Props)</h2>
            <p>You can look at props as arguments - its a way to send data down between components</p>
            <GreetingMessage name="Raven" message="its the future you can see" />
            <Car type="BMW" price="10,000" />
            <Car type="Suzuki" price="5,000" />
            <Car type="Toyota" price="7,000" />
        </div>
    )
}

export default Props;