import React from 'react';
import Card from './Card';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import styled from 'styled-components';

// styled components
const MainDiv = styled.div({
  'position': 'relative',
  'margin': 'auto',
  'display': 'flex',
  'flex-direction': 'row',
  'height': '30%',
  'min-width': '500px',
  'margin': 'auto',
  'width': '1100px',
  'align-items': 'center',
});

const ArrowButtons = styled.button({
  'position': 'relative',
  'outline': 'none',
  'text-align': 'center',
  'border': 'none',
  'height': '40px',
});

const MainContainer = styled.div({
  'clip-path': 'inset(0px 0px -5px 0px)',
  'width': '1010px',
  'position': 'relative',
  'height': '300px',
  'margin': 'auto',
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
      activeCard: undefined,
      cardArray: this.props.sampleData
    }
  }
  

  componentDidMount() {
    // fetch request to populate data
    const reqRoute = 'http://50.18.211.252/reqFromClient/' + this.props.requestHomeId;
    fetch(reqRoute)
      .then((res) => {
        return res.text();
      }).then((data) => {
        let parsedData = JSON.parse(data);
        this.setState({
          cardArray: parsedData,
        });
      }).catch((err) => {
        console.log('error encountered while retrieving mount data...', err);
      });
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
        <ArrowButtons onClick={ () => { this.handleLeftArrowClick() } }><LeftArrow /></ArrowButtons>
        <MainContainer>
          <CardContainer style={{'transform': `translateX(-${(activeCardIndex - 1) * (100 / cardArray.length)}%)`}}>
            {
              cardArray.map((card, index) => (
                <Card key={card.interiorPicLinks[0]} listingDetail={card} />
              ))
            }
          </CardContainer>
        </MainContainer>
        <ArrowButtons onClick={ () => { this.handleRightArrowClick() } }><RightArrow /></ArrowButtons>
      </MainDiv>
    );
  }
}

export default App;
