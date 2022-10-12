
const DinoData = ({name, diet, coolness}) => {
    return (
        <div className="dinoWrapper">
            <h3>{name}</h3>
            <p>{diet}</p>
            <p>{coolness}</p>
        </div>
    )
}


const Dinosaur = () => {
    return (
        <div>
            <h2>My Favourite Dinosaurs</h2>
            <p>Here's a list of the coolest Dinosaurs</p>
            <DinoData name="Triceratops" diet="Plants" coolness="10" />
            <DinoData name="T-Rex" diet="All Meat no plants" coolness="2" />
            <DinoData name="Spinosaurus" diet="Fish" coolness="8" />
        </div>
    )
}


export default Dinosaur;