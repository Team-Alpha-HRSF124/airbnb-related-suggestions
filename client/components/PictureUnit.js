import React from 'react';

class PictureUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0,
      pictureArray: this.props.pictureLinks
    }
  }

  handleLeftArrowClick() {
    // transition into previous picture
  }

  handleRightArrowClick() {
    // transition into next picture
  }

  render() {
    return (
      <div>PictureUnit Placeholder {this.state.pictureArray}</div>
    )
  }
};

export default PictureUnit;