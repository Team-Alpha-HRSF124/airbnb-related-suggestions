import React from 'react';

class PictureUnit extends React.Component {
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
    return (
      <div onMouseEnter={ () => { this.onMouseEnter() } } onMouseLeave={ () => this.onMouseLeave() }>
        {this.state.focused ? <div>focused!</div> : <div></div>}
        <img src={this.state.pictureArray[this.state.currentPicture]} height='200' width='auto'></img>
      </div>
    )
  }
};

export default PictureUnit;