import React from 'react';
import styled from 'styled-components';

// styled components
const Images = styled.img({
  'border-radius': '2%',
  'object-fit': 'cover',
  'width': '100%',
  '-webkit-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  '-o-user-select': 'none',
  'user-select': 'none',
});

const CardDiv = styled.div({
  'width': '200px',
  'height': '100%',
  'margin': '2px',
});

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0,
      focused: false,
      pictureArray: this.props.listingDetail.interiorPicLinks,
      price: this.props.listingDetail.price,
      review: this.props.listingDetail.review,
      title: this.props.listingDetail.title,
      type: this.props.listingDetail.type
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.listingDetail.price !== prevProps.listingDetail.price || this.props.listingDetail.title !== prevProps.listingDetail.title) {
      this.setState({
        pictureArray: this.props.listingDetail.interiorPicLinks,
        price: this.props.listingDetail.price,
        review: this.props.listingDetail.review,
        title: this.props.listingDetail.title,
        type: this.props.listingDetail.type
      })
    }
  }

  componentDidMount() {
    // debugger;
  }

  onMouseEnter() {
    this.setState({
      focused: true
    })
  }

  onMouseLeave() {
    this.setState({
      focused: false
    })
  }

  handleLeftArrowClick() {
    // transition into previous picture
  }

  handleRightArrowClick() {
    // transition into next picture
  }

  render() {
    const {pictureArray, currentPicture} = this.state;
    return (
      <CardDiv onMouseEnter={ () => { this.onMouseEnter() } } onMouseLeave={ () => this.onMouseLeave() }>
        {this.state.focused ? <div>focused!</div> : <div></div>}
        <Images src={pictureArray[currentPicture]} height='99%' width='auto'></Images>
      </CardDiv>
    )
  }
};

export default Card;