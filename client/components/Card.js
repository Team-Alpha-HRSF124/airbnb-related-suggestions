import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
// styled components

const Images = styled.img({
  'z-index': '0',
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
  'position': 'relative',
  'width': '200px',
  'height': '100%',
  'margin': '2px',
  'clip-path': 'inset(0px 0px 0px 0px)'
});

const LeftButton = styled.button({
  'z-index': '1',
  'position': 'absolute',
  'border-radius': '50%',
  'text-align': 'center',
  'height': '30px',
  'width': '30px',
  'font-size': '100%',
  'opacity': '0.9',
  'top': '42%',
  'left': '5%',
  'focusable': 'false',
  'outline': 'none'
});

const RightButton = styled.button({
  'z-index': '1',
  'position': 'absolute',
  'border-radius': '50%',
  'text-align': 'center',
  'height': '30px',
  'width': '30px',
  'font-size': '100%',
  'opacity': '0.9',
  'top': '42%',
  'left': '80%',
  'focusable': 'false',
  'outline': 'none'
});

const FavouriteButton = styled.button({
  'z-index': '1',
  'position': 'absolute',
  'border-radius': '50%',
  'text-align': 'center',
  'height': '30px',
  'width': '30px',
  'font-size': '100%',
  'opacity': '0.9',
  'top': '2%',
  'left': '80%',
  'focusable': 'false',
  'outline': 'none'
});

const SlideShowContainer = styled.div({
  'z-index': 0,
  'position': 'absolute',
  'display': 'flex',
  'height': '100%',
  'transition': 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  'display': 'flex',
});

const ImageContainer = styled.div({
  'position': 'relative',
  'width': '200px',
  'height': '100%',
  'margin': '2px',
})

const DotMap = styled.div({
  'position': 'absolute'
});

// transition variables
const duration = 100;

const defaultStyle = {
  transition: `${duration}ms`,
  transitionTimingFunction: 'ease-in'
};

const transitionStyles = {
  entering: { opacity: 0.9 },
  entered: { opacity: 0.9 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

// React component
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
    if (this.state.currentPicture === this.state.pictureArray.lenght - 1) { return }
    this.setState({
      currentPicture: this.state.currentPicture + 1
    });
  }

  handleRightArrowClick() {
    // transition into next picture
    if (this.state.currentPicture === 0) { return }
    this.setState({
      currentPicture: this.state.currentPicture - 1
    });
  }

  handleFavouriteClick() {
    // brings up favorite menu (bonus)
  }

  render() {
    const {focused, pictureArray, currentPicture} = this.state;
    return (
      <CardDiv onMouseEnter={ () => { this.onMouseEnter() } } onMouseLeave={ () => this.onMouseLeave() }>
        <SlideShowContainer style={{'transform': `translateX(-${currentPicture * (100 / pictureArray.length)}%)`}}>
        {
          pictureArray.map((picture) => (
            <ImageContainer>
              <Images key={picture} src={picture} height='99%' width='auto'></Images>
            </ImageContainer>
          ))
        }
        </SlideShowContainer>
        <Transition in={focused} timeout={duration}>
          {
            state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                <LeftButton onClick={ () => { this.handleLeftArrowClick() } }>{`<`}</LeftButton>
                <RightButton onClick={ () => { this.handleRightArrowClick() } }>{`>`}</RightButton>
                <FavouriteButton onClick={ () => { this.handleFavouriteClick() } }>{`♡`}</FavouriteButton>
              </div>
            )
          }
        </Transition>
      </CardDiv>
    )
  }
};

export default Card;