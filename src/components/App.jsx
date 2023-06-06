import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getPictures } from '../API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

const perPage = 12;

export default class App extends Component {
  state = {
    imageName: '',
    images: null,
    page: 1,
    visibleLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;

    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        const { totalHits, hits } = await getPictures(imageName, page);

        if (totalHits === 0) {
          toast.error('Sorry, there are no images matching your search query.');
          this.setState({ visibleLoadMore: false });
          return;
        } else {
          this.setState(prevState => ({
            images: page === 1 ? hits : [...prevState.images, ...hits],
            visibleLoadMore: page * perPage < totalHits,
          }));
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  onFormSubmit = imageName => {
    this.setState({ imageName, page: 1, images: null });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={2500} />
        <Searchbar onSubmit={this.onFormSubmit} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.visibleLoadMore && (
          <Button onCLick={this.onLoadMoreClick} />
        )}
      </div>
    );
  }
}
