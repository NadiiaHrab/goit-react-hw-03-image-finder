import { Component } from "react";
// import ImageInfo from "../components/ImageInfo";
// import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import ImageApi from "../components/ImageApi";
import ImageGallery from "../components/ImageGallery";
import Loader from "../components/Loader";


export class App extends Component {

  state = {
    imageName: '',
    images: [],
    loading: false,

    // showModal: false,
    
  }

  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

      componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.imageName;
        const nextImage = this.props.imageName;

        if (prevImage !== nextImage) {
            this.setState ({loading: true})
           
            ImageApi.fetchImages(nextImage)
            .then(images => this.setState({ images }))
            .catch(error => console.error())
            .finally(() => this.setState({ loading: false }))
        }  
    }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }))

  // };


  render() {
   const {images, loading} = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
         {loading && <Loader/>}

        {/* <ImageInfo imageName={this.state.imageName} /> */}
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
  
}