import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
//import { getPictures } from '../API/API';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    imageName: '',
    images: null,
    page: 1,
    showModal: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { imageName, page } = this.state;
  //   const prevPage = prevState.page;
  //   const prevImages = prevState.images;

  //   if (prevState.imageName !== imageName) {
  //     try {
  //       const { totalHits, hits } = getPictures(imageName, page);

  //       if (totalHits === 0) {
  //         toast.error(
  //           'Sorry, there are no images matching your search query. Please try again.'
  //         );
  //       } else {
  //         this.setState(prevState => ({
  //           images: page === 1 ? hits : [...prevImages, ...hits],
  //         }));
  //       }
  //     } catch (error) {
  //       toast.error(`${error}`);
  //     }
  //   }
  // }

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
