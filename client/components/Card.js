import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
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
    const {_id, pictureArray, currentPicture} = this.state;
    return (
      <div id={`card-${_id}`} className="card" onMouseEnter={ () => { this.onMouseEnter() } } onMouseLeave={ () => this.onMouseLeave() }>
        {this.state.focused ? <div>focused!</div> : <div></div>}
        <img className="images" src={pictureArray[currentPicture]} height='100%' width='auto'></img>
      </div>
    )
  }
};

export default Card;