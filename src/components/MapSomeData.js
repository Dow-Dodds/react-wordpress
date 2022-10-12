const chocolateData = [
    {
        name: "Whittakers Berry & Biscuit",
        price: 12,
        imageUrl: "https://assets.woolworths.com.au/images/2010/708938.jpg?impolicy=wowcdxwbjbx&w=900&h=900"
    },
    {
        name: "Whittakers Creamy Dairy Milk",
        price: 5,
        imageUrl: "https://assets.woolworths.com.au/images/2010/266869.jpg?impolicy=wowcdxwbjbx&w=900&h=900"
    },
    {
        name: "Cadbury Caramilk",
        price: 7,
        imageUrl: "https://www.cadbury.co.nz/media/catalog/product/m/o/mond_9300617075547-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=519&width=712&canvas=712:519"
    }
]

const AllChocolate = () => {
    const renderedChocolate = chocolateData.map(
        (chocolate, index) => {
            return (
                <div key={index} className="chocWrapper">
                    <h3>{chocolate.name}</h3>
                    <p>${chocolate.price}</p>
                    <img src={chocolate.imageUrl} />
                </div>
            )
        }
    )
    return renderedChocolate;
}

const MapSomeData = () => {
    return (
        <>
            <h2>Map some data</h2>
            <p>This component will render a list of chocolate from an array of objects.</p>
            <div id="chocGrid">
                <AllChocolate />
            </div>
        </>
    )
}

export default MapSomeData;