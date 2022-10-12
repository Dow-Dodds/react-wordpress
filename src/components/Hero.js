import addTwoNumbers from ".././utilities/add";
// <> </> These are called react fragments, they sit in as parent elements, which are required to be around JSX (Html and js)

const name = "Dow";

//heres a component of the hero that goes on the bottom 
//scrolling text 
const BottomText = () => {
  return (
    <div id="ultimate-container">
      <div id="text-box">
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
      </div>
      <div id="text-box">
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
      </div>
      <div id="text-box">
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
        <p>HELLO BUN</p>
        <p>I LOVE REACT!</p>
      </div>
    
     
    </div>
  )
}



const Hero = () => {
  return (
    <div id="hero">
      <h1 className='main-header'>First React App</h1>
      <p>This is the hero component</p>
      <p>Welcome back, {name}</p>
      <BottomText />
    </div>
  );
}

export default Hero;
