import { Component } from "react";
import css from "./Modal.module.css";


export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", e => {
            if (e.code === 'Escape') {
                console.log("закриваємо по Escape");

                this.props.onClose();
            }
       })
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount"); 
    }


    render() {
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}