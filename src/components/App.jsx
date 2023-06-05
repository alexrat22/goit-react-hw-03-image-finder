import React, { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
