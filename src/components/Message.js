const grabUserName = () => {
    let name = prompt("What is your name?");
}

const greeting = () => {
    alert("Hello");
}


const Message = () => {
    return (
        <>
        <div className="imageSection">
            <img id="totoro" src="https://cdn.pastemagazine.com/www/articles/My%20Neighbor%20Totoro%20via%20Studio%20Ghibli%20Header.jpg" alt="random image" />
            <div id="floatText">
                <h2>Welcome to the Homepage</h2>
                <button onClick={greeting}>Click Me</button>
            </div>
        </div>
       
        </>
    )
}

export default Message;