import React, { Component } from "react";
import CrystalPics from "./components/CrystalPictures";
import Scores from "./components/Scores";
import Header from "./components/Header"
import crystals from "./crystals.json";
import Data from "./components/HistoricData"
import Wrapper from "./components/Wrapper"
import './App.css';


class App extends Component {
  state={
    crystals,
    score: 0,
    value: [0, 0, 0, 0],
    target: 0,
    wins: 0,
    losses: 0
  }

  componentDidMount=()=> {
    this.updateValues()
    this.updateTarget()
  }
  
  handleScore = (id, value) => {
    console.log(`in handleScore ${id} ${value}`);
    this.setState({ score: this.state.score + value })
    if (this.state.score === this.state.target) {
      console.log("you win!")
      this.updateValues()
      this.updateTarget()
      let newWins = this.state.wins + 1
      this.setState({ score: 0, wins: newWins})
    } else if (this.state.score > this.state.target) {
      console.log("you lose")
      this.updateValues()
      this.updateTarget()
      let newLosses = this.state.losses + 1
      this.setState({ score: 0, losses: newLosses})
    }
  }

  updateValues = ()=> {
    let newValues = this.state.value.map(x=>(x=(Math.floor(Math.random() * 12)+1)))
    this.setState({ value: newValues })
  }


  updateTarget = ()=> {
    let newTarget = (Math.floor(Math.random() * (120 -19 + 1)));
    this.setState({ target: newTarget })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Scores targetScore={this.state.target} score={this.state.score} />
        <Wrapper>
            {
              this.state.crystals.map(crystal =>
                <CrystalPics 
                className="image" 
                name={crystal.name}
                image={crystal.picture}
                id={crystal.id}
                key={crystal.id}
                value={this.state.value[crystal.id]}
                score={this.handleScore}
                />
                )
            }
        </Wrapper>
        <Data wins={this.state.wins} losses={this.state.losses} />
      </div>
    );
  }
}

export default App;
