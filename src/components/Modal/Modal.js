import { Component } from "react";
import css from "./Modal.module.css";


export default class Modal extends Component {

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
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}