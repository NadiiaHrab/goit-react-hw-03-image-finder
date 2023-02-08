import { Component } from "react";
// import css from "./Searchbar.module.css";

export default class Searchbar extends Component {

    state = {
        imageName: '',
    }

    handleImageNameChange = e => {
    this.setState({imageName: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        const { imageName } = this.state;
        e.preventDefault();

        if (imageName === '') {
            return alert("уведіть назву картинки")
        }
        
        this.props.onSubmit(this.state.imageName)
        this.setState({imageName: ''})
    }


    render() {
        return (
            <>
<header class="searchbar">
 <form class="form" onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleImageNameChange}
      value={this.state.imageName}
    />
  </form>
</header>
</>
        )
    }
}