import { Component } from "react";

import ImageApi from "../ImageApi";
import ImageGallery from "components/ImageGallery";
import Loader from "../Loader";

export default class ImageInfo extends Component {

    state = {
        imageName: null,
        status: "idle"
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.imageName;
        const nextImage = this.props.imageName;

        if (prevImage !== nextImage) {
            this.setState ({status: "pending"})
           
            ImageApi.fetchImages(nextImage)
                .then(image => this.setState({ image, status: 'resolved' }))
                .catch(error => console.error())

        }

        
        
    }

    render() {
        const {imageName,  status } = this.state;
        
          
    if (status === "pending") {
        return <Loader />
        }

    if (status === 'resolved') {
            return <ImageGallery hits={imageName} />
        }
                   
    }
}