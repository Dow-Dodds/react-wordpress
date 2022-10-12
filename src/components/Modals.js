import { useState } from 'react'


const ModalWindow = () => {
    return (
        <div id="modal">
            <h2>Modal</h2>
            <p>How you doing</p>
        </div>
    )
}

const Modals = () => {
    const [modalIsOpen, triggerModal] = useState(false);

    const toggleModal = () => {
        // putting a ! before a boolean value tells it to flip from true to false or vice versa
        triggerModal(!modalIsOpen)
        console.log(modalIsOpen)
    }

    return (
        <div className="section">
            <h2>React Modals</h2>
            <p>This modal uses useState to render on the screen.</p>
            <button onClick={toggleModal}>Toggle modal</button>
            {modalIsOpen && <ModalWindow />}
        </div>
    )
}

export default Modals