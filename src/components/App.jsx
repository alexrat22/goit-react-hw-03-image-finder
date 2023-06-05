import React, { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {showModal && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
