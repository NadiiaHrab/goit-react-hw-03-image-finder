import { Component } from "react";


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
            <div className="Overlay">
                <div className="Modal">
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}