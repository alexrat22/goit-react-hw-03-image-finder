import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getPictures } from '../API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    imageName: '',
    images: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;

    if (prevState.imageName !== imageName) {
      try {
        const { totalHits, hits } = await getPictures(imageName, page);

        if (totalHits === 0) {
          toast.error('Sorry, there are no images matching your search query.');
          return;
        } else {
          this.setState(prevState => ({
            images: page === 1 ? hits : [...prevState.images, ...hits],
          }));
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  onFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.onFormSubmit} />
        {this.state.images && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
}
