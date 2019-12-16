import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import DotMap from './DotMap';
import Star from './Star';
import Heart from './Heart';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
// import Montserrat from 'https://fonts.googleapis.com/css?family=Montserrat&display=swap';
// styled components

const Images = styled.img({
  'z-index': '0',
  'border-radius': '2%',
  'object-fit': 'cover',
  'width': '99%',
  'height': '80%',
  '-webkit-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  '-o-user-select': 'none',
  'user-select': 'none',
});

const CardDiv = styled.div({
  'position': 'relative',
  'width': '333px',
  'height': '100%',
  'margin': '2px',
  'clip-path': 'inset(0px 0px 0px 0px)'
});

const LeftButton = styled.button`
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  text-align: center;
  height: 30px;
  width: 30px;
  font-size: 100%;
  opacity: 0.9;
  top: 110px;
  left: 15px;
  focusable: false;
  outline: none;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    transform: scale(1.2);
  }
`;

const RightButton = styled(LeftButton)`
  left: 292px;
`;

const FavouriteButton = styled(RightButton)`
  top: 10px;
`;

const SlideShowContainer = styled.div({
  'z-index': 0,
  'position': 'absolute',
  'display': 'flex',
  'height': '100%',
  'transition': '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  'display': 'flex',
});

const ImageContainer = styled.div({
  'position': 'relative',
  'width': '333px',
  'height': '100%',
  'margin': '3px',
});

const InfoContainer = styled.div`
  margin: 2px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 2px;
  font-family: Montserrat;
`;

const TypeDiv = styled.div`
  font-size: 80%
  margin: 2px;
`;

const TitleDiv = styled(TypeDiv)`
  font-size: 90%;
`;

const PriceDiv = styled(TypeDiv)`
  
`;

const ReviewDiv = styled(TypeDiv)`
  position: absolute;
  top: 0;
  right: 3px;
  display: flex;
`;

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
      type: this.props.listingDetail.type,
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

  handleRightArrowClick() {
    // transition into previous picture
    if (this.state.currentPicture === this.state.pictureArray.length - 1) {
      this.setState({
        currentPicture: 0
      });
    } else {
      this.setState({
        currentPicture: this.state.currentPicture + 1
      });
    }
  }

  handleLeftArrowClick() {
    // transition into next picture
    if (this.state.currentPicture === 0) {
      this.setState({
        currentPicture: this.state.pictureArray.length - 1
      })
    } else {
      this.setState({
        currentPicture: this.state.currentPicture - 1
      });
    }
  }

  handleFavouriteClick() {
    // brings up favorite menu (bonus)
  }

  render() {
    const {type, price, review, title, focused, pictureArray, currentPicture} = this.state;
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
                <LeftButton onClick={ () => { this.handleLeftArrowClick() } }><LeftArrow /></LeftButton>
                <RightButton onClick={ () => { this.handleRightArrowClick() } }><RightArrow /></RightButton>
                <FavouriteButton onClick={ () => { this.handleFavouriteClick() } }><Heart /></FavouriteButton>
              </div>
            )
          }
        </Transition>
        <DotMap pictureArrayLength={pictureArray.length} currentIndex={currentPicture} />
        <InfoContainer>
          <TypeDiv>{type.match(/Entire/g) ? 'Entire house' + ' · ' + type.match(/..bed?/) : 'Private Room' + ' · ' + type.match(/..bed?/)}</TypeDiv>
          <TitleDiv>{title.split(' ').slice(0, 5).join(' ')}</TitleDiv>
          <PriceDiv>{price.replace(/per?/, '/')}</PriceDiv>
          <ReviewDiv>
            <Star />
            {review}
          </ReviewDiv>
        </InfoContainer>
      </CardDiv>
    )
  }
};

export default Card;