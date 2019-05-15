import React, { Component } from 'react';
import './App.css';
import Boring from './components/Boring';
import Balling from './components/Balling';
import Buttons from './components/Buttons';
import Fun from './components/Fun';
import Dangerous from './components/Dangerous';
import {MAIN, BALLING, BORING, FUN, DANGEROUS} from './constants'

class App extends Component {
  state = {
    page: MAIN
  }

  goToBoring = () =>
    this.setState({
      page: BORING
    })

    goToBalling = () =>
    this.setState({
      page: BALLING
    })
    goToFun = () =>
    this.setState({
      page: FUN
    })
    goToMain = () =>
    this.setState({
      page: MAIN
    })
    goToDangerous = () =>
    this.setState({
      page: DANGEROUS
    })

    
  render() {
    
    switch(this.state.page){
      case MAIN:
        return(
          <Buttons 
            goToBoring={this.goToBoring}
            goToBalling={this.goToBalling}
            goToFun={this.goToFun}
            goToDangerous={this.goToDangerous}/>
        )
      case BORING:
        return(
          <Boring 
            goToAccount={this.goToAccount}
            goToMain={this.goToMain}/>
        )
      case BALLING:
        return(
          <Balling 
            goToMain={this.goToMain}/>
      )
      case FUN:
        return(
          <Fun 
            goToMain={this.goToMain}/>
        )
      case DANGEROUS:
        return(
          <Dangerous 
          goToMain={this.goToMain}/>
      )
    }
  }
}

export default App;
