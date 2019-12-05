import React from 'react';
import Card from './Card';
import styled from 'styled-components';

// styled components
const MainDiv = styled.div({
  'margin': 'auto',
  'display': 'flex',
  'height': '30%',
  'min-width': '500px',
  'width': '735px',
});

const ArrowContainerDiv = styled.div({
  'flex': 1,
  'z-index': 1
});

const ArrowButtons = styled.button({
  'outline': 'none',
  'text-align': 'center',
  'border': 'none',
  'font-size': '200%',
  'vertical-align': 'middle',
  'width': '100%',
  'height': '100%',
  'justify-content': 'center',
});

const MainContainer = styled.div({
  'clip-path': 'inset(0px 0px 0px 0px)',
  'flex': 10,
  'position': 'relative',
  'height': '300px'
});

const CardContainer = styled.div({
  'z-index': 0,
  'position': 'absolute',
  'display': 'flex',
  'height': '100%',
  'min-width': '600px',
  'transition': 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
});

// React component 
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
      <MainDiv>
        <ArrowContainerDiv><ArrowButtons onClick={ () => { this.handleLeftArrowClick() } }>⬅</ArrowButtons></ArrowContainerDiv>
        <MainContainer>
          <div>
            <CardContainer style={{'transform': `translateX(-${(activeCardIndex - 1) * (100 / cardArray.length)}%)`}}>
              {
                cardArray.map((card, index) => (
                  <Card key={card.interiorPicLinks[0]} listingDetail={card} />
                ))
              }
            </CardContainer>
          </div>
        </MainContainer>
        <ArrowContainerDiv><ArrowButtons onClick={ () => { this.handleRightArrowClick() } }>⬅</ArrowButtons></ArrowContainerDiv>
      </MainDiv>
    );
  }
}

export default App;
