import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  onFormChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  onFormSubmit = evt => {
    const imageName = this.state.imageName;
    evt.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Enter image title');
      return;
    }
    this.props.onSubmit(imageName);
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            name="imageName"
            type="text"
            value={this.state.imageName}
            onChange={this.onFormChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
