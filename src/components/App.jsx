import { Component } from "react";
// import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import ImageInfo from "../components/ImageInfo";



export class App extends Component {

  state = {
    imageName: '',

    // showModal: false,
    
  }
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }))

  // };


  render() {
    // const { showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageInfo imageName={this.state.imageName} />
        
        

        {/* <button type="button" onClick={this.toggleModal}>open modal</button>
        {showModal && (
          <Modal
            onClose={this.toggleModal}>
          <h1>hello</h1>
          <button
            type="button"
            onClick={this.toggleModal}>
            close modal</button>
        </Modal>
        )} */}
      </>
    )
        
}
  
};
