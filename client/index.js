import React from 'react';
import ReactDOM from 'react-dom';
import PictureUnit from './components/PictureUnit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPointer: 0,
      rightPointer: 2,
      rawData: this.props.sampleData,
    }
  }

  // componentDidMount() {
  //   // fetch request to populate data
  // }

  handleLeftArrowClick() {
    // slide the picture unit to the right
  }

  handleRightArrowClick(){
    // slide the picture unit to the left
  }

  render() {
    var unitsToRender = [this.state.leftPointer, this.state.leftPointer + 1, this.state.rightPointer]; 
    return (
      <div>
        {
          unitsToRender.map((pictureIndex) => {
            <PictureUnit pictureLinks={this.state.rawData[pictureIndex]} />
          })
        }
      </div>
    )
  }
}

ReactDOM.render(<App sampleData={[1, 2, 3, 4, 5, 6]} />, document.getElementById('app'));


