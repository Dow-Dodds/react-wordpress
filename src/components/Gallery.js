

const Title = () => {
    return (
        <>
        <h2>GALLERY</h2>
        </>
    )
}

const Images = () => {
    return (
        <div className="imageWrapper">
        <img src="https://picsum.photos/id/37/200/300" alt="random" />
        <img src="https://picsum.photos/id/209/200/300" alt="random" />
        <img src="https://picsum.photos/id/100/200/300" alt="random" />
        </div>
      )
}

const Contact = () => {
    return (
        <div className="contactWrapper">
            <h3>Contact Us</h3> 
            <h4>We'd love to hear from you!</h4>
            <p><b>Email:</b> totoro@cutemail.com</p>
            <p><b>Phone:</b> 027 200 4000</p>
        </div>
    )
}



const Gallery = () => {
    return (
        <div id="galleryWrapper">
        <Title />
        <Images />
        <Contact />
        </div>
    )
  }

  export default Gallery;