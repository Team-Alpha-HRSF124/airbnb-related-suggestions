import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Card from './Card';
import LeftArrowMain from './LeftArrowMain';
import RightArrowMain from './RightArrowMain';

// style import
import '../style/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: 1,
      activeCard: this.props.sampleData[0],
      cardArray: this.props.sampleData,
    }
  }

  componentDidMount() {
    // fetch request to populate data
  }

  handleLeftArrowClick() {
    // move activeCardIndex to the left
    if (this.state.activeCardIndex === 1) { return }
    const nextIndex = this.state.activeCardIndex - 1;
    this.setState({
      activeCardIndex: nextIndex,
      activeCard: this.state.cardArray[nextIndex]
    });
  }

  handleRightArrowClick() {
    // move activeCardIndex to the right
    if (this.state.activeCardIndex === this.state.cardArray.length - 2) { return }
    const nextIndex = this.state.activeCardIndex + 1;
    this.setState({
      activeCardIndex: nextIndex,
      activeCard: this.state.cardArray[nextIndex]
    });
  }

  render() {
    const {activeCardIndex, activeCard, cardArray} = this.state;
    return (
      <div className="main">
        <div className="arrow-button-containers"><button onClick={ () => { this.handleLeftArrowClick() } } className="arrow-buttons">⬅</button></div>
        <div className="main-container">
          <div className={`card-container-wrapper active-card-${activeCardIndex}`}>
            <div className="card-container" style={{'transform': `translateX(-${(activeCardIndex - 1) * (100 / cardArray.length)}%)`}}>
              {
                cardArray.map((card, index) => (
                  <Card _id={index} key={card.interiorPicLinks[0]} listingDetail={card} />
                ))
              }
            </div>
          </div>
        </div>
        <div onClick={ () => { this.handleRightArrowClick() } } className="arrow-button-containers"><button onClick={ () => { this.handleLeftArrowClick() } } className="arrow-buttons">⬅</button></div>
      </div>
    );
  }
}

export default App;
