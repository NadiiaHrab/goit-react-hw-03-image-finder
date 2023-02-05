import { Component } from "react";
import Modal from "../components/Modal";


export class App extends Component {

  state = {
    showModal: false,
    
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))

  };


  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>open modal</button>
        {showModal && (
          <Modal
            onClose={this.toggleModal}>
          <h1>hello</h1>
          <button
            type="button"
            onClick={this.toggleModal}>
            close modal</button>
        </Modal>
        )}
      </>
    )
        
}
  
};