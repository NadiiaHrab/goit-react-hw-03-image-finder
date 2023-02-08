import { Component } from "react";
import {Modal, Overlay} from "./Modal.styled"


export default class ModalWrap extends Component {

    componentDidMount() {
        // console.log("componentDidMount");
        window.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log("закриваємо по Escape");
            
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        // console.log("клік по бегдpоп");
        // console.log("e.currentTarget", e.currentTarget);
        // console.log("e.target", e.target);

        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }


    render() {
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <Modal>
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </Modal>
            </Overlay>
        )
    }
}