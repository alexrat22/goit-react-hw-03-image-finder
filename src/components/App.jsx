import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  onFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.onFormSubmit} />
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
