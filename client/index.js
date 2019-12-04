import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import sampleData from './assets/sampleData';
import PictureUnit from './components/PictureUnit';
import LeftArrowMain from './components/LeftArrowMain';
import RightArrowMain from './components/RightArrowMain';

// style import
import style from './style/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerIndex: 1,
      rawData: this.props.sampleData,
    }
  }

  componentDidMount() {
    // fetch request to populate data
  }

  handleLeftArrowClick() {
    // slide the picture unit to the right
    if (this.state.centerIndex === 1) {
      return;
    }
    this.setState({
      centerIndex: this.state.centerIndex - 1
    });
  }

  handleRightArrowClick(){
    // slide the picture unit to the left
    if (this.state.centerIndex === this.state.rawData.length - 2) {
      return;
    }
    this.setState({
      centerIndex: this.state.centerIndex + 1
    });
  }

  render() {
    var unitsToRender = [this.state.centerIndex - 1, this.state.centerIndex, this.state.centerIndex + 1]; 
    return (
      <span className="main">
        <LeftArrowMain onClick={ () => { this.handleLeftArrowClick() } } />
          {
            unitsToRender.map((pictureIndex) => (
              <PictureUnit key={this.state.rawData[pictureIndex].interiorPicLinks[0]} listingDetail={this.state.rawData[pictureIndex]} />
            ))
          }
        <RightArrowMain onClick={ () => { this.handleRightArrowClick() } } />
      </span>
    )
  }
}

ReactDOM.render(<App sampleData={sampleData} />, document.getElementById('app'));


